import { QueryKeys, useMetaQuery } from "@/shared/async-state";
import { useClients } from "@/shared/clients/app";

export interface UseQueryProjectByIdArgs {
	id: string;
}

export function useQueryProjectById({ id }: UseQueryProjectByIdArgs) {
	const { project } = useClients();

	return useMetaQuery({
		queryKey: [QueryKeys.QUERY_PROJECT_BY_ID, id],
		queryFn: () => project.getById({ id }),
	});
}
