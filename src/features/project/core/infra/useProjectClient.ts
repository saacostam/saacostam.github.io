import { useCallback, useMemo } from "react";
import type { IProject, IProjectClient } from "@/features/project/core/domain";
import { PROJECTS } from "@/features/project/core/infra/project-data";

const descendingOrder = (a: IProject, b: IProject) => b.rating - a.rating;

export function useProjectClient(): IProjectClient {
	const getAll: IProjectClient["getAll"] = useCallback(
		async ({ page, limit }) => {
			const sortedProjects = [...PROJECTS].sort(descendingOrder);

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

	const getTopProjects: IProjectClient["getTopProjects"] =
		useCallback(async () => {
			const sorterProjects = [...PROJECTS].sort(descendingOrder);

			return sorterProjects.slice(0, 4);
		}, []);

	return useMemo(
		() => ({
			getAll,
			getTopProjects,
		}),
		[getAll, getTopProjects],
	);
}
