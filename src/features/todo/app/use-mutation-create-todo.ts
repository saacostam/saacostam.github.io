import { MutationKeys, useMetaMutation } from "@/shared/async-state";
import { useClients } from "@/shared/clients/app";

export function useMutationCreateTodo() {
	const { todoClient } = useClients();

	return useMetaMutation({
		mutationKey: [MutationKeys.CREATE_TODO],
		mutationFn: todoClient.createTodo.bind(todoClient),
	});
}
