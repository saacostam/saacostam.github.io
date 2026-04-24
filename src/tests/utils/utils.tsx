import {
	type RenderHookOptions,
	type RenderOptions,
	render,
	renderHook,
} from "@testing-library/react";
import type { PropsWithChildren } from "react";
import { AppRoot } from "@/AppRoot";
import { GlobalModalsProvider } from "@/shared/modals/ui";
import {
	type MockAdapters,
	MockAdaptersProvider,
	type MockClients,
	MockClientsProvider,
	TestProviders,
} from "./utils.setup";

/**
 * Shared wrapper factory for consistent provider hierarchy
 */
function createWrapper({
	modals,
	adapters,
	clients,
}: {
	initialEntries?: string[];
	modals: boolean;
	adapters?: MockAdapters;
	clients?: MockClients;
}) {
	// Modals
	const Modals = ({ children }: PropsWithChildren) =>
		modals ? <GlobalModalsProvider>{children}</GlobalModalsProvider> : children;

	return function Wrapper({ children }: { children: React.ReactNode }) {
		return (
			<TestProviders>
				<MockClientsProvider mock={clients}>
					<MockAdaptersProvider mock={adapters}>
						<Modals>{children}</Modals>
					</MockAdaptersProvider>
				</MockClientsProvider>
			</TestProviders>
		);
	};
}

/**
 * Render a React component with all test providers.
 */
export function renderWithProviders(
	ui: React.ReactElement,
	options?: Omit<RenderOptions, "wrapper"> & {
		adapters?: MockAdapters;
		clients?: MockClients;
	},
) {
	const { adapters, clients, ...renderOptions } = options ?? {};

	return render(ui, {
		wrapper: createWrapper({
			modals: true,
			adapters,
			clients,
		}),
		...renderOptions,
	});
}

/**
 * Render a React hook with all test providers.
 */
export function renderHookWithProviders<Result, Props>(
	callback: (props: Props) => Result,
	options?: Omit<RenderHookOptions<Props>, "wrapper"> & {
		adapters?: MockAdapters;
		clients?: MockClients;
	},
) {
	const { adapters, clients, ...renderOptions } = options ?? {};

	return renderHook(callback, {
		wrapper: createWrapper({
			modals: true,
			adapters,
			clients,
		}),
		...renderOptions,
	});
}

/**
 * Renders AppRoot.
 * The router is part of the app, but you can control the initial route via `route`.
 */
export function renderAppRoot(
	options?: Omit<RenderOptions, "wrapper"> & {
		adapters?: MockAdapters;
		clients?: MockClients;
		route?: string;
	},
) {
	const { adapters, clients, route, ...renderOptions } = options ?? {};

	if (route) {
		window.location.hash = `#${route}`;
	}

	return render(<AppRoot />, {
		wrapper: createWrapper({
			modals: false,
			adapters,
			clients,
		}),
		...renderOptions,
	});
}
