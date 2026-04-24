import { useInfiniteQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/shared/async-state";
import { useClients } from "@/shared/clients/app";

const LIMIT = 5;

export function useQueryAllProjects() {
	const { project } = useClients();

	return useInfiniteQuery({
		queryKey: [QueryKeys.QUERY_PROJECTS],
		queryFn: (args) => project.getAll({ limit: LIMIT, page: args.pageParam }),
		initialPageParam: 1,
		getNextPageParam: ({ page, total, limit }) => {
			const totalPages = Math.ceil(total / limit);
			return page === totalPages ? undefined : page + 1;
		},
	});
}
