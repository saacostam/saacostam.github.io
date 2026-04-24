import type { IAdapters } from "@/shared/adapters/core/domain";
import { IThemeVariant } from "@/shared/adapters/theme/domain";
import type { IClients } from "@/shared/clients/domain";

export function mockDi() {
	const clients = {
		project: {
			getAll: vi.fn(),
		},
	} satisfies IClients;

	const adapters = {
		analyticsAdapter: {
			trackEvent: vi.fn(),
		},
		errorMonitoringAdapter: {
			report: vi.fn(),
		},
		fetcherAdapter: {
			get: vi.fn(),
			post: vi.fn(),
			put: vi.fn(),
			patch: vi.fn(),
			delete: vi.fn(),
		},
		intersectionObserver: {
			useOnInView: vi.fn(),
		},
		persistenceAdapter: {
			get: vi.fn(),
			set: vi.fn(),
			unsafeGet: vi.fn(),
		},
		notificationAdapter: {
			notify: vi.fn(),
		},
		themeAdapter: {
			theme: IThemeVariant.LIGHT,
			setTheme: vi.fn(),
		},
		uuidAdapter: {
			gen: vi.fn(),
		},
	} satisfies IAdapters;

	return {
		clients,
		adapters,
	};
}
