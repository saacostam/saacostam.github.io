import { MutationKeys, useMetaMutation } from "@/shared/async-state";
import { useClients } from "@/shared/clients/app";

export function useMutationDeleteTodo() {
	const { todoClient } = useClients();

	return useMetaMutation({
		mutationKey: [MutationKeys.DELETE_TODO],
		mutationFn: todoClient.deleteTodo.bind(todoClient),
	});
}
