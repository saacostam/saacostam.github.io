import { useCallback, useMemo } from "react";
import type { IProjectClient } from "@/features/project/core/domain";
import { PROJECTS } from "@/features/project/core/infra/project-data";

export function useProjectClient(): IProjectClient {
	const getAll: IProjectClient["getAll"] = useCallback(
		async ({ page, limit }) => {
			const sortedProjects = [...PROJECTS].sort((a, b) => b.rating - a.rating);

			const start = (page - 1) * limit;
			const end = start + limit;

			const elements = sortedProjects.slice(start, end);

			return {
				page,
				elements,
				total: sortedProjects.length,
				limit,
			};
		},
		[],
	);

	return useMemo(
		() => ({
			getAll,
		}),
		[getAll],
	);
}
