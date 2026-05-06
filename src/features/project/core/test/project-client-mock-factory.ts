import type {
	IProject,
	IProjectClientPayload,
} from "@/features/project/core/domain";

class ProjectClientMockFactory {
	getProjectMock(overrides?: Partial<IProject>): IProject {
		return {
			id: "project-1",
			name: "Project 1",
			...overrides,
		} as IProject;
	}

	getAllResponse(args?: {
		elements?: IProject[];
		page?: number;
		total?: number;
		limit?: number;
	}): IProjectClientPayload["GetAllResponse"] {
		return {
			elements: args?.elements ?? [this.getProjectMock({ id: "project-1" })],
			page: args?.page ?? 1,
			total: args?.total ?? args?.elements?.length ?? 1,
			limit: args?.limit ?? 6,
		};
	}
}

export const projectClientMockFactory = new ProjectClientMockFactory();
