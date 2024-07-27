import { Link } from "react-router-dom";

import { Project } from "../project.type";
import { useMyRouter } from "../../router";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({
  project: { id, name, smImage },
}: ProjectCardProps) {
  const { getProjectLink } = useMyRouter();

  const projectLink = getProjectLink(id);

  return (
    <div className="card lg:card-side bg-base-200 shadow-xl mb-4">
      {smImage ? (
        <figure>
          <img src={smImage} alt="Album" />
        </figure>
      ) : null}
      <div className="card-body">
        <div className="flex flex-row">
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
  return (
    <div className="w-100 keleton mb-4 h-48"></div>
  )
}
