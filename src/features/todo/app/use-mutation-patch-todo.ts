import { MutationKeys, useMetaMutation } from "@/shared/async-state";
import { useClients } from "@/shared/clients/app";

export function useMutationPatchTodo() {
	const { todoClient } = useClients();

	return useMetaMutation({
		mutationKey: [MutationKeys.PATCH_TODO],
		mutationFn: todoClient.patchTodo.bind(todoClient),
	});
}
