import { Header } from "../modules/core";
import { ProjectCard, projectRepository } from "../modules/projects";

export const HomePage = () => {
  const projects = projectRepository.get();

  return (
    <>
      <Header className="text-center mb-8" size="2xl" headerLevel={2}>
        Projects
      </Header>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </>
  );
};
