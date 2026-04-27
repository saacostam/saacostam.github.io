import { QueryKeys, useMetaQuery } from "@/shared/async-state";
import { useClients } from "@/shared/clients/app";

export function useQueryTopProjects() {
	const { project } = useClients();

	return useMetaQuery({
		queryKey: [QueryKeys.QUERY_TOP_PROJECTS],
		queryFn: () => project.getTopProjects(),
	});
}
