export interface ILoginClient {
	login(
		args: ILoginClientPayload["LoginIn"],
	): Promise<ILoginClientPayload["LoginOut"]>;
}

export interface ILoginClientPayload {
	LoginIn: {
		username: string;
		password: string;
	};
	LoginOut: {
		token: string;
	};
}
