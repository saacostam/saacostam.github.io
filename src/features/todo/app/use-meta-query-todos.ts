import { QueryKeys, useMetaQuery } from "@/shared/async-state";
import { useClients } from "@/shared/clients/app";

export function useMetaQueryTodos() {
	const { todoClient } = useClients();

	return useMetaQuery({
		queryKey: [QueryKeys.QUERY_TODOS],
		queryFn: todoClient.queryTodos.bind(todoClient),
	});
}
