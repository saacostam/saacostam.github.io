import { QueryKeys, useMetaQuery } from "@/shared/async-state";
import { useClients } from "@/shared/clients/app";

export interface UseQueryRelatedProjectsArgs {
	id: string;
}

export function useQueryRelatedProjects({ id }: UseQueryRelatedProjectsArgs) {
	const { project } = useClients();

	return useMetaQuery({
		queryKey: [QueryKeys.QUERY_RELATED_PROJECTS, id],
		queryFn: () => project.getRelatedProjects({ projectId: id }),
	});
}
