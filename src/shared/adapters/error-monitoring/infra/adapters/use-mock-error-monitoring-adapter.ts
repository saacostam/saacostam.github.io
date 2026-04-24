import { useCallback, useMemo } from "react";
import type { IErrorMonitoringAdapter } from "../../domain";

const isDev = import.meta.env.DEV;

export function useMockErrorMonitoringAdapter(): IErrorMonitoringAdapter {
	const report: IErrorMonitoringAdapter["report"] = useCallback((...args) => {
		if (!isDev) return;

		console.error("[ErrorMonitoring]", ...args);
	}, []);

	return useMemo(
		() => ({
			report,
		}),
		[report],
	);
}
