import { Link } from "react-router-dom";

import { Project } from "./project.type";
import { useMyRouter } from "../router";
import { Skills } from "../skills";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({
  project: { id, name, description, imgSrc, skills },
}: ProjectCardProps) => {
  const { getProjectLink } = useMyRouter();

  const projectLink = getProjectLink(id);

  return (
    <div className="card lg:card-side bg-base-200 shadow-xl mb-4">
      {imgSrc ? (
        <figure>
          <img src={imgSrc} alt="Album" />
        </figure>
      ) : null}
      <div className="card-body">
        <div className="flex flex-row">
          <div className="flex-1 pr-0 md:pr-8">
            <h2 className="card-title text-primary mb-4 font-medium">{name}</h2>
            {description}
            <Skills skills={skills} className="mt-4" color="info" />
          </div>
          <div className="flex-0 flex place-items-center">
            <Link to={projectLink} className="btn btn-outline btn-primary">
              Go
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
