import type { ILoginClientPayload } from "@/features/login/domain";
import { MutationKeys, useMetaMutation } from "@/shared/async-state";
import { useClients } from "@/shared/clients/app";

export function useMutateLogin() {
	const { loginClient } = useClients();

	return useMetaMutation({
		mutationKey: [MutationKeys.LOGIN],
		mutationFn: (req: ILoginClientPayload["LoginIn"]) => loginClient.login(req),
	});
}
