import { useEffect, useState } from "react";
import { Header } from "../../core";
import { InfoIcon, XIcon } from "../../icons";
import { Project } from "../project.type";
import { useWindowDimensions } from "../../viewport";

export interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({
  project: { id, description, name, url, iframe },
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

  const [showViewPortIssuesAlert, setShowViewPortIssuesAlert] = useState(true);

  useEffect(() => {
    setShowViewPortIssuesAlert(true);
  }, [id]);

  return (
    <section>
      <Header className="text-center mb-8" size="2xl" headerLevel={2}>
        {name}
      </Header>
      <p className="mb-4">{description}</p>
      {viewPortIssues.length > 0 && showViewPortIssuesAlert ? (
        <div
          className="lg:hidden relative alert alert-warning shadow-lg opacity-90 mb-4"
          role="alert"
        >
          <InfoIcon className="hidden md:block" />
          <div>
            <h3 className="font-bold">Ooops!</h3>
            <div className="text-xs">
              This project may not work on smaller viewports:{" "}
              <span className="font-semibold">
                {viewPortIssues.join(" - ")}
              </span>
            </div>
          </div>
          <button
            className="btn btn-sm btn-circle btn-warning absolute right-4 top-4"
            onClick={() => setShowViewPortIssuesAlert(false)}
          >
            <XIcon />
          </button>
        </div>
      ) : null}
      <div
        className="mockup-window bg-base-300 border mx-auto"
        style={{ ...(width ? { width: width } : {}) }}
      >
        <iframe src={url} height={height} width={width} title={name}></iframe>
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
