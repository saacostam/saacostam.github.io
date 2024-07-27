import { ProjectCard } from "./project.card";
import { Project } from "../project.type";

export interface ProjectsPreviewProps {
    projects: Project[]
}

export function ProjectsPreview({
    projects
}: ProjectsPreviewProps) {
    return <>
        {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
        ))}
    </>
}
