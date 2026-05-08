import type { IProject, IProjectCategory } from "./project";

/**
 * Abstraction over project-related data-retrieval
 */
export interface IProjectClient {
	getAll(
		req: IProjectClientPayload["GetAllRequest"],
	): Promise<IProjectClientPayload["GetAllResponse"]>;
	getById(
		req: IProjectClientPayload["GetByIdRequest"],
	): Promise<IProjectClientPayload["GetByIdResponse"]>;
	getRecommendedProjects(
		req: IProjectClientPayload["GetRecommendedProjectsRequest"],
	): Promise<IProjectClientPayload["GetRecommendedProjectsResponse"]>;
	getTopProjects(): Promise<IProjectClientPayload["GetTopProjectsResponse"]>;
}

export interface IProjectClientPayload {
	GetAllRequest: {
		/**
		 * Filter by categories.
		 *
		 * If undefined, null or empty, then it includes all categories.
		 */
		categories?: Array<IProjectCategory> | null;
		limit: number;
		page: number;
	};
	GetAllResponse: {
		elements: IProject[];
		limit: number;
		page: number;
		total: number;
	};

	GetByIdRequest: {
		id: string;
	};
	GetByIdResponse: {
		project: IProject;
	};

	GetRecommendedProjectsRequest: {
		projectId: string;
	};
	GetRecommendedProjectsResponse: {
		projects: IProject[];
	};

	GetTopProjectsResponse: IProject[];
}
