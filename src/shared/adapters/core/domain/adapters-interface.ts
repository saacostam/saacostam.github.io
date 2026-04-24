import type { IAnalyticsAdapter } from "@/shared/adapters/analytics/domain";
import type { IErrorMonitoringAdapter } from "@/shared/adapters/error-monitoring/domain";
import type { IFetcherAdapter } from "@/shared/adapters/fetcher/domain";
import type { INotificationAdapter } from "@/shared/adapters/notification/domain";
import type { IPersistenceAdapter } from "@/shared/adapters/persistence/domain";
import type { ISessionAdapter } from "@/shared/adapters/session/domain";
import type { IThemeAdapter } from "@/shared/adapters/theme/domain";
import type { IUuidAdapter } from "@/shared/adapters/uuid/domain";

/**
 * Interface for managing various application adapters.
 */
export interface IAdapters {
	analyticsAdapter: IAnalyticsAdapter;
	errorMonitoringAdapter: IErrorMonitoringAdapter;
	fetcherAdapter: IFetcherAdapter;
	notificationAdapter: INotificationAdapter;
	persistenceAdapter: IPersistenceAdapter;
	sessionAdapter: ISessionAdapter;
	themeAdapter: IThemeAdapter;
	uuidAdapter: IUuidAdapter;
}
