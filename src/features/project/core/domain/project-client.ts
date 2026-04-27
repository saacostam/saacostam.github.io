import type { IProject, IProjectCategory } from "./project";

/**
 * Abstraction over project-related data-retrieval
 */
export interface IProjectClient {
	getAll(
		req: IProjectClientPayload["GetAllRequest"],
	): Promise<IProjectClientPayload["GetAllResponse"]>;
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

	GetTopProjectsResponse: IProject[];
}
