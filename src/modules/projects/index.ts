import { PROJECTS } from "./projects.constants";
import { ProjectRepository } from "./project.repo";

export * from "./project-content";
export * from "./project.card";
export * from "./project.type";
export const projectRepository = new ProjectRepository(PROJECTS);
