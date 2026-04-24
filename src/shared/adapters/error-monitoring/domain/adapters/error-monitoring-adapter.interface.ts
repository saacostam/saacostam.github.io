export interface IErrorMonitoringAdapter {
	report(
		error: unknown,
		ctx: {
			where: string;
		},
	): void;
}
