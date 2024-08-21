import { Link } from "react-router-dom";

import { LeanProject } from "../types";
import { useMyRouter } from "../../router";
import { FETCH_STATIC_DATA } from "../../constants";

interface ProjectCardProps {
  project: LeanProject;
}

export function ProjectCard({
  project: { id, name, smImage, description },
}: ProjectCardProps) {
  const { getProjectLink } = useMyRouter();

  const projectLink = getProjectLink(id);

  return (
    <div className="card lg:card-side bg-base-200 shadow-xl mb-4 items-center">
      {smImage ? (
        <Link to={projectLink}>
          <div className="mockup-window bg-base-300 w-80 mx-8 mt-8 lg:mr-0 lg:mb-8 shrink-0">
            <figure>
              <img
                src={`${FETCH_STATIC_DATA}${smImage}`}
                alt="project-image"
                width="320"
                height="160"
              />
            </figure>
          </div>
        </Link>
      ) : null}
      <div className="card-body md:flex-row items-center md:items-start">
        <div className="flex-1 pr-0 md:pr-8">
          <Link to={projectLink}>
            <h3 className="card-title text-primary mb-4 font-medium text-center">
              {name}
            </h3>
          </Link>
          <p className="hidden mb-8 md:block lg:mb-0">{description}</p>
        </div>
        <div className="flex-0 flex place-items-center ">
          <Link to={projectLink} className="btn btn-outline btn-primary">
            Go to Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="w-100 skeleton mb-4 h-80 lg:h-64 flex flex-col lg:flex-row items-center p-8">
      <div className="skeleton h-40 w-80 mr-8 mb-4 lg:mb-0 shrink-0"></div>
      <div className="flex-1 grow-1 w-100">
        <div className="skeleton h-8 w-48 mb-4"></div>
        <div className="skeleton h-8 w-100 mb-0 lg:mb-4"></div>
        <div className="skeleton hidden lg:block h-16 w-100"></div>
      </div>
    </div>
  );
}
