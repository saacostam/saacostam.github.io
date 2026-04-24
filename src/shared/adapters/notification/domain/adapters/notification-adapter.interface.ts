export interface INotificationAdapter {
	notify(args: INotificationAdapterPayload["NotifyIn"]): void;
}

export interface INotificationAdapterPayload {
	NotifyIn: {
		type: "success" | "error";
		msg: string;
		title?: string;
	};
}
