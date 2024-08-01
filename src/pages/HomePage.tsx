import { Header, Hero } from "../modules/core";
import { ProjectsGate } from "../modules/projects";
import { ProjectsPreview } from "../modules/projects/components/projects-preview";

export function HomePage() {
  return (
    <>
      <Hero />
      <Header className="text-center mb-8" size="3xl" headerLevel={2}>
        Projects
      </Header>
      <ProjectsGate ProjectOnSuccess={ProjectsPreview} />
    </>
  );
}
