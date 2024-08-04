import { Header } from "../modules/core";
import { ProjectsGate } from "../modules/projects";
import { ProjectsPreview } from "../modules/projects/components/projects-preview";

export function ProjectsPage() {
  return (
    <>
      <Header className="text-center mb-8" size="3xl" headerLevel={2}>
        My Projects
      </Header>
      <ProjectsGate ProjectOnSuccess={ProjectsPreview} />
    </>
  );
}
