import { Link } from "react-router-dom";

import { Project } from "../project.type";
import { useMyRouter } from "../../router";
import { FETCH_STATIC_DATA } from "../../constants";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({
  project: { id, name, smImage },
}: ProjectCardProps) {
  const { getProjectLink } = useMyRouter();

  const projectLink = getProjectLink(id);

  return (
    <div className="card lg:card-side bg-base-200 shadow-xl mb-4 items-center">
      {smImage ? (
        <div className="mockup-window bg-base-300 w-80 mx-8 mt-8 lg:mr-0 lg:mb-8">
          <figure>
            <img src={`${FETCH_STATIC_DATA}${smImage}`} alt="Album" />
          </figure>
        </div>
      ) : null}
      <div className="card-body">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 pr-0 md:pr-8">
            <h3 className="card-title text-primary mb-4 font-medium">{name}</h3>
          </div>
          <div className="flex-0 flex place-items-center">
            <Link to={projectLink} className="btn btn-outline btn-primary">
              Go to Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return <div className="w-100 keleton mb-4 h-48"></div>;
}
