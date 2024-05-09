import { useParams, Navigate } from "react-router-dom";

import { ProjectContent, projectRepository } from "../modules/projects";
import { RoutePath } from "../modules/router";

export const ProjectPage = () => {
  const { id } = useParams();

  const project = projectRepository.getById(id);
  if (!project) return <Navigate to={RoutePath.notFoundPage} />;

  return (
    <>
      <ProjectContent project={project} />
    </>
  );
};
