import { useMemo } from "react";

import { ProjectCard } from "./project.card";
import { Project } from "../types";

export interface ProjectsPreviewProps {
  projects: Project[];
}

export function ProjectsPreview({ projects: _projects }: ProjectsPreviewProps) {
  const projects = useMemo(() => {
    const descendingOrder = (a: Project, b: Project) => b.rating - a.rating;
    return _projects.sort(descendingOrder);
  }, [_projects]);

  return (
    <>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </>
  );
}
