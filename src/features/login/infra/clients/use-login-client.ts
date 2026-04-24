import { useCallback, useMemo } from "react";
import { DomainError, DomainErrorType } from "@/shared/errors/domain";
import type { ILoginClient } from "../../domain";

export function useLoginClient(): ILoginClient {
	const login: ILoginClient["login"] = useCallback(async () => {
		await new Promise<void>((res) => setTimeout(res, 500));

		const rand = Math.random();
		if (rand < 0.1) {
			throw new DomainError({
				userMsg: "Login attempt failed",
				type: DomainErrorType.BAD_REQUEST,
				msg: "Network Request",
				fields: [
					{
						name: "password",
						message: "Should contain special characters",
					},
				],
			});
		} else if (rand < 0.2) {
			throw new DomainError({
				userMsg: "Login attempt failed",
				type: DomainErrorType.BAD_REQUEST,
				msg: "Network Request",
				fields: [
					{
						name: "username",
						message: "Username is already taken",
					},
					{
						name: "password",
						message: "Should contain special characters",
					},
				],
			});
		}

		return {
			token: "MOCK_TOKEN",
		};
	}, []);

	return useMemo(
		() => ({
			login,
		}),
		[login],
	);
}
