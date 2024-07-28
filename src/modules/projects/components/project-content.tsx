import { Header } from "../../core";
import { Project } from "../project.type";

export interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({
  project: { description, name, url, iframe },
}: ProjectContentProps) {
  const height = iframe.height || 750;
  const width = iframe.width;

  return (
    <section>
      <Header className="text-center mb-8" size="2xl" headerLevel={2}>
        {name}
      </Header>
      <p className="mb-8">{description}</p>
      <div
        className="mockup-window bg-base-300 border mx-auto"
        style={{ ...(width ? { width: width } : {}) }}
      >
        <iframe src={url} height={height} width={width}></iframe>
      </div>
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
  );
}
