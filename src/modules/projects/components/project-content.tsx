import { Header } from "../../core";
import { Project } from "../project.type";

export interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({
  project: { name, rating },
}: ProjectContentProps) {
  return (
    <section>
      <Header className="text-center mb-8" size="2xl" headerLevel={2}>
        {name}
      </Header>
      <span>{rating}/5.0</span>
    </section>
  );
}

export function ProjectContentSkeleton() {
  return (
    <>
      <div className="skeleton mx-auto w-96 h-12 mb-8"></div>
      <div className="skeleton mx-auto w-100 h-64 mb-8"></div>
      <div className="skeleton mx-auto w-100 h-48 mb-8"></div>
    </>
  )
}
