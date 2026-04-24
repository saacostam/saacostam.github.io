import { type PropsWithChildren, useMemo } from "react";
import { useNavigate } from "react-router";
import { useMockAnalyticsProvider } from "@/shared/adapters/analytics/infra";
import { AdaptersContext } from "@/shared/adapters/core/app";
import type { IAdapters } from "@/shared/adapters/core/domain";
import { useMockErrorMonitoringAdapter } from "@/shared/adapters/error-monitoring/infra";
import { HttpFetcherAdapter } from "@/shared/adapters/fetcher/infra";
import { useNotificationAdapter } from "@/shared/adapters/notification/infra";
import { useLocalStoragePersistenceAdapter } from "@/shared/adapters/persistence/infra";
import { usePersistanceSessionAdapter } from "@/shared/adapters/session/infra";
import { useThemeAdapterImpl } from "@/shared/adapters/theme/infra";
import { useUuidAdapter } from "@/shared/adapters/uuid/infra";
import { genRoute, RouteName } from "@/shared/router/app";

/**
 * Provider component to supply application adapters to the component tree.
 *
 * This component wraps its children with the necessary context provider (`AdaptersContext.Provider`)
 * to make adapters available throughout the app.
 *
 * @param {PropsWithChildren} props - The props object containing the children to be rendered.
 *
 * @returns {JSX.Element} A context provider wrapping the children with available adapters.
 */
export function AdaptersProvider({ children }: PropsWithChildren) {
	return (
		<AdaptersProviderWrapper>
			<AdaptersProviderDependencyInjection>
				{children}
			</AdaptersProviderDependencyInjection>
		</AdaptersProviderWrapper>
	);
}

/**
 * Dependency injection wrapper that initializes and provides the necessary adapters.
 *
 * This component creates the adapters (e.g., persistence adapter) and supplies them through the
 * `AdaptersContext.Provider`.
 *
 * @param {PropsWithChildren} props - The props object containing the children to be rendered.
 *
 * @returns {JSX.Element} A context provider that wraps the children with injected adapters.
 */
function AdaptersProviderDependencyInjection({ children }: PropsWithChildren) {
	const nav = useNavigate();

	const persistenceAdapter = useLocalStoragePersistenceAdapter();
	const uuidAdapter = useUuidAdapter();

	const analyticsAdapter = useMockAnalyticsProvider();
	const errorMonitoringAdapter = useMockErrorMonitoringAdapter();
	const notificationAdapter = useNotificationAdapter({
		uuidAdapter,
	});
	const sessionAdapter = usePersistanceSessionAdapter(persistenceAdapter);
	const themeAdapter = useThemeAdapterImpl();

	const fetcherAdapter = useMemo(
		() =>
			new HttpFetcherAdapter(
				{
					onUnauthorized: async () => {
						sessionAdapter.removeToken();
						await nav(
							genRoute({
								name: RouteName.HOME,
							}),
						);
					},
				},
				{
					baseUrl: import.meta.env.VITE_API_URL,
				},
			),
		[nav, sessionAdapter],
	);

	const adapters: IAdapters = useMemo(
		() => ({
			analyticsAdapter,
			sessionAdapter,
			errorMonitoringAdapter,
			fetcherAdapter,
			notificationAdapter,
			persistenceAdapter,
			themeAdapter,
			uuidAdapter,
		}),
		[
			analyticsAdapter,
			errorMonitoringAdapter,
			fetcherAdapter,
			notificationAdapter,
			persistenceAdapter,
			sessionAdapter,
			themeAdapter,
			uuidAdapter,
		],
	);

	return (
		<AdaptersContext.Provider value={adapters}>
			{children}
		</AdaptersContext.Provider>
	);
}

/**
 * A wrapper component responsible for injecting additional library providers
 * or external components around the application.
 *
 * This allows adding necessary libraries or providers that need to be globally available
 * across the app while maintaining the structure and modularity of the component tree.
 *
 * @param {PropsWithChildren} props - The props object containing the children to be rendered.
 *
 * @returns {JSX.Element} The children wrapped with any additional providers or components.
 */
function AdaptersProviderWrapper({ children }: PropsWithChildren) {
	return children;
}
