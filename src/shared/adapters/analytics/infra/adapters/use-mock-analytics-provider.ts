import { useCallback, useMemo } from "react";
import type { IAnalyticsAdapter } from "../../domain";

export function useMockAnalyticsProvider(): IAnalyticsAdapter {
	const trackEvent: IAnalyticsAdapter["trackEvent"] = useCallback(() => {
		// do nothing;
	}, []);

	return useMemo(
		() => ({
			trackEvent,
		}),
		[trackEvent],
	);
}
