import { Header } from "../../core";
import { FireIcon, GithubIcon } from "../../icons";
import { Project } from "../types";
import { useWindowDimensions } from "../../viewport";
import { ViewportAlert } from "./viewport-alert";

export interface ProjectContentProps {
  project: Project;
  className?: string;
}

export function ProjectContent({
  project: { id, description, name, url, iframe, repoUrl },
  className,
}: ProjectContentProps) {
  const { width: windowWidth } = useWindowDimensions();

  const height = iframe.height || 750;
  const width = iframe.width
    ? Math.min(iframe.width, windowWidth * 0.95)
    : undefined;

  const { canBeUsedInMobile, isResponsive } = iframe;

  const viewPortIssues = [
    ...(canBeUsedInMobile === false ? ["No Mobile Controls"] : []),
    ...(isResponsive === false ? ["Not Responsive"] : []),
  ];

  return (
    <section key={id} className={className}>
      <Header className="text-center mb-4" size="2xl" headerLevel={2}>
        {name}
      </Header>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap mb-4">
        <a
          href={url}
          target="_blank"
          className="btn btn-secondary btn-outline btn-sm mr-4"
        >
          <FireIcon className="inline" /> Demo
        </a>
        <a
          href={repoUrl}
          target="_blank"
          className="btn btn-outline btn-sm mr-4"
        >
          <GithubIcon className="inline" /> Code
        </a>
      </div>
      {viewPortIssues.length > 0 ? (
        <ViewportAlert viewPortIssues={viewPortIssues} />
      ) : null}
      <div
        className="mockup-browser bg-base-300 border mx-auto"
        style={{ ...(width ? { width: width } : {}) }}
      >
        <div className="mockup-browser-toolbar">
          <a className="input" href={url} target="_blank">
            {url}
          </a>
        </div>
        <iframe
          src={url}
          height={height}
          width={width}
          title={name}
          className="w-full"
        ></iframe>
      </div>
    </section>
  );
}

export function ProjectContentSkeleton() {
  return (
    <>
      <div className="skeleton mx-auto w-96 h-12 mb-8"></div>
      <div className="skeleton mx-auto w-100 h-16 mb-8"></div>
      <div className="skeleton mx-auto w-100 h-96 mb-8"></div>
    </>
  );
}
