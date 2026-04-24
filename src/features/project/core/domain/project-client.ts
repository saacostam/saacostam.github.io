import type { IProject } from "./project";

/**
 * Abstraction over project-related data-retrieval
 */
export interface IProjectClient {
	getAll(
		req: IProjectClientPayload["GetAllRequest"],
	): Promise<IProjectClientPayload["GetAllResponse"]>;
}

export interface IProjectClientPayload {
	GetAllRequest: {
		limit: number;
		page: number;
	};
	GetAllResponse: {
		elements: IProject[];
		limit: number;
		page: number;
		total: number;
	};
}
