import type { ISession } from "../entities";

export interface ISessionAdapter {
	session: ISession;
	removeToken: () => void;
	setToken: (token: string) => void;
}
