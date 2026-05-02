import {
	type IProject,
	IProjectCategory,
} from "@/features/project/core/domain";

interface IProjectWithDistance {
	project: IProject;
	distance: number;
}

const MAP_CATEGORY_TO_NUMBERED_PROPERTY = new Map<IProjectCategory, number>([
	[IProjectCategory.MusicSoftware, 50],
	[IProjectCategory.SoftwareEngineering, 30],
	[IProjectCategory.Games, 10],
]);

export const projectRecommendationsService = {
	findClosestNProjects(
		ref: IProject,
		allProjects: IProject[],
		n: number = 3,
	): IProject[] {
		const differentProjects = allProjects.filter(
			(project) => project.id !== ref.id,
		);

		const projectWithDistances: IProjectWithDistance[] = differentProjects.map(
			(project): IProjectWithDistance => ({
				project: project,
				distance: euclideanDistance(
					this.mapProjectToPropertiesNumberVector(ref),
					this.mapProjectToPropertiesNumberVector(project),
				),
			}),
		);

		const ascendingOrderingCriterion = (
			a: IProjectWithDistance,
			b: IProjectWithDistance,
		): number =>
			0.5 * (a.distance - b.distance) +
			0.5 * (b.project.rating - a.project.rating);

		return projectWithDistances
			.sort(ascendingOrderingCriterion)
			.slice(0, n)
			.sort((a, b) => b.project.rating - a.project.rating)
			.map(({ project }) => project);
	},

	mapProjectToPropertiesNumberVector(proj: IProject): number[] {
		const projectCategoryValue = proj.category.reduce((value, category) => {
			const categoryValue = MAP_CATEGORY_TO_NUMBERED_PROPERTY.get(category);

			return value + (categoryValue ?? 0);
		}, 0);

		return [projectCategoryValue];
	},
};

function _squaredEuclidean(p: number[], q: number[]): number {
	let d: number = 0;
	for (let i = 0; i < p.length; i++) {
		d += (p[i] - q[i]) * (p[i] - q[i]);
	}
	return d;
}

function euclideanDistance(p: number[], q: number[]): number {
	return Math.sqrt(_squaredEuclidean(p, q));
}
