import type { IProject } from "@/features/project/core/domain";

export const projectRecommendationsService = {
	findNRecommendedProjects(
		ref: IProject,
		allProjects: IProject[],
		n: number = 3,
	): IProject[] {
		const differentProjects = allProjects.filter(
			(project) => project.id !== ref.id,
		);

		const ascendingOrderingCriterion = (a: IProject, b: IProject): number =>
			b.rating - a.rating;

		return differentProjects.sort(ascendingOrderingCriterion).slice(0, n);
	},
};
