import type { IAdapters } from "@/shared/adapters/core/domain";
import type { ISession } from "@/shared/adapters/session/domain";
import { IThemeVariant } from "@/shared/adapters/theme/domain";
import type { IClients } from "@/shared/clients/domain";

export function mockDi(overrides?: {
	adapters?: {
		sessionAdapter?: {
			session?: ISession;
		};
	};
}) {
	const clients = {
		todoClient: {
			createTodo: vi.fn(),
			deleteTodo: vi.fn(),
			patchTodo: vi.fn(),
			queryTodos: vi.fn(),
		},
		loginClient: {
			login: vi.fn(),
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
		persistenceAdapter: {
			get: vi.fn(),
			set: vi.fn(),
			unsafeGet: vi.fn(),
		},
		notificationAdapter: {
			notify: vi.fn(),
		},
		sessionAdapter: {
			session: overrides?.adapters?.sessionAdapter?.session ?? {
				type: "authenticated",
				token: "token",
			},
			removeToken: vi.fn(),
			setToken: vi.fn(),
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
