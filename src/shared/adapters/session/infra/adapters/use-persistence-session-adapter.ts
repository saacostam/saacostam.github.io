import { useCallback, useEffect, useMemo, useState } from "react";
import {
	type IPersistenceAdapter,
	IPersistenceAdapterKey,
} from "@/shared/adapters/persistence/domain";
import type { ISession, ISessionAdapter } from "../../domain";

const getSessionBasedOnToken = (token: unknown): ISession =>
	token && typeof token === "string"
		? {
				type: "authenticated",
				token,
			}
		: {
				type: "unauthenticated",
			};

export const usePersistanceSessionAdapter = (
	persistenceAdapter: IPersistenceAdapter,
): ISessionAdapter => {
	const token = persistenceAdapter.get(IPersistenceAdapterKey.TOKEN);

	const [session, setSession] = useState<ISession>(
		getSessionBasedOnToken(token),
	);

	useEffect(() => {
		setSession(getSessionBasedOnToken(token));
	}, [token]);

	const removeToken = useCallback(() => {
		setSession({
			type: "unauthenticated",
		});
	}, []);

	const setToken = useCallback((token: string) => {
		setSession({
			type: "authenticated",
			token: token,
		});
	}, []);

	useEffect(() => {
		if (session.type === "unauthenticated") {
			persistenceAdapter.set(IPersistenceAdapterKey.TOKEN, null);
		} else if (session.token) {
			persistenceAdapter.set(IPersistenceAdapterKey.TOKEN, session.token);
		}
	}, [session, persistenceAdapter]);

	return useMemo(
		() => ({
			removeToken,
			session,
			setToken,
		}),
		[removeToken, session, setToken],
	);
};
