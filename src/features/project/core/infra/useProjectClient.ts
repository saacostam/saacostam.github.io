import { useCallback, useMemo } from "react";
import type { IProject, IProjectClient } from "@/features/project/core/domain";
import { DomainError, DomainErrorType } from "@/shared/errors/domain";
import { StringUtils } from "@/shared/utils/string";
import { PROJECTS } from "./project-data";
import { projectRecommendationsService } from "./project-recommendations-service";

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

	const getById: IProjectClient["getById"] = useCallback(async ({ id }) => {
		const project = PROJECTS.find((p) => p.id === id);

		if (!project)
			throw new DomainError({
				type: DomainErrorType.NOT_FOUND,
				userMsg: "Project not found",
				msg: `[useProjectClient.getById] Project not found`,
			});

		return {
			project,
		};
	}, []);

	const getRecommendedProjects: IProjectClient["getRecommendedProjects"] =
		useCallback(async ({ projectId }) => {
			const AMOUNT_OF_RECOMMENDATIONS = 3;

			const project = PROJECTS.find((p) => p.id === projectId);

			if (!project)
				throw new DomainError({
					type: DomainErrorType.NOT_FOUND,
					userMsg: "Project not found",
					msg: `[useProjectClient.getById] Project not found`,
				});

			return {
				projects: projectRecommendationsService.findClosestNProjects(
					project,
					PROJECTS,
					AMOUNT_OF_RECOMMENDATIONS,
				),
			};
		}, []);

	const getTopProjects: IProjectClient["getTopProjects"] =
		useCallback(async () => {
			const sorterProjects = [...PROJECTS].sort(descendingOrder);

			return sorterProjects.slice(0, 4);
		}, []);

	return useMemo(
		() => ({
			getAll,
			getById,
			getRecommendedProjects,
			getTopProjects,
		}),
		[getAll, getById, getRecommendedProjects, getTopProjects],
	);
}
