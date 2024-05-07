import { useParams, Navigate } from "react-router-dom";

import { projectRepository } from "../data/projects";
import { Header } from "../modules/core";
import { ProjectContent } from "../modules/projects";
import { RoutePath } from "../modules/router";
import { Skills } from "../modules/skills";

export const ProjectPage = () => {
  const { id } = useParams();

  const project = projectRepository.getById(id);
  if (!project) return <Navigate to={RoutePath.notFoundPage} />;

  const {
    name,
    navigation,

    skills,
  } = project;

  return (
    <>
      <Header className="text-center mb-8" size="2xl" headerLevel={2}>
        {name}
      </Header>
      <Skills skills={skills} className="mb-4" />
      <ProjectContent navigation={navigation} />
    </>
  );
};
