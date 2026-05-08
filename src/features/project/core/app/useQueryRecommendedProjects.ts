import { QueryKeys, useMetaQuery } from "@/shared/async-state";
import { useClients } from "@/shared/clients/app";

export interface UseQueryRecommendedProjectsArgs {
	id: string;
}

export function useQueryRecommendedProjects({
	id,
}: UseQueryRecommendedProjectsArgs) {
	const { project } = useClients();

	return useMetaQuery({
		queryKey: [QueryKeys.QUERY_RECOMMENDED_PROJECTS, id],
		queryFn: () => project.getRecommendedProjects({ projectId: id }),
	});
}
