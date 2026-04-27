import { useCallback, useMemo } from "react";
import type { IProject, IProjectClient } from "@/features/project/core/domain";
import { StringUtils } from "@/shared/utils/string";
import { PROJECTS } from "./project-data";

const descendingOrder = (a: IProject, b: IProject) => b.rating - a.rating;
const ALL_CATEGORIES = StringUtils.dedupe(PROJECTS.flatMap((p) => p.category));

export function useProjectClient(): IProjectClient {
	const getAll: IProjectClient["getAll"] = useCallback(
		async ({ categories, page, limit }) => {
			const categoriesToInclude =
				categories && categories.length > 0 ? categories : ALL_CATEGORIES;

			const projectFilter = (project: IProject): boolean =>
				!!categoriesToInclude.find((filterCategory) =>
					project.category.includes(filterCategory),
				);

			const _sortedProjects = [...PROJECTS].sort(descendingOrder);
			const filteredProjects = _sortedProjects.filter(projectFilter);

			const start = (page - 1) * limit;
			const end = start + limit;

			const elements = filteredProjects.slice(start, end);

			return {
				page,
				elements,
				total: filteredProjects.length,
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
