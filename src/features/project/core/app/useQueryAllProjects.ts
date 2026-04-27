import { useInfiniteQuery } from "@tanstack/react-query";
import type { IProjectCategory } from "@/features/project/core/domain";
import { QueryKeys } from "@/shared/async-state";
import { useClients } from "@/shared/clients/app";

const LIMIT = 6;

export interface UseQueryAllProjectsArgs {
	categories: IProjectCategory[];
}

export function useQueryAllProjects({ categories }: UseQueryAllProjectsArgs) {
	const { project } = useClients();

	return useInfiniteQuery({
		queryKey: [QueryKeys.QUERY_PROJECTS, categories.join(",")],
		queryFn: (args) =>
			project.getAll({ categories, limit: LIMIT, page: args.pageParam }),
		initialPageParam: 1,
		getNextPageParam: ({ page, total, limit }) => {
			const totalPages = Math.ceil(total / limit);
			return page === totalPages ? undefined : page + 1;
		},
	});
}
