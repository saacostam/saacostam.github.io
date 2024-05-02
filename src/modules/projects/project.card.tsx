import { Link } from "react-router-dom"

import { Project } from "../../data/projects";
import { useMyRouter } from '../router';

interface ProjectCardProps{
    project: Project;
}

export const ProjectCard = ({
    project: {
        id,
        name,
        description,
        imgSrc,
    }
}: ProjectCardProps) => {
    const {
        getProjectLink,
    } = useMyRouter();

    const projectLink = getProjectLink(id);

    return (
        <div className="card lg:card-side bg-base-200 shadow-xl">
            {
                !!imgSrc ?? <figure><img src={imgSrc} alt="Album"/></figure>
            }
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                {description}
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" to={projectLink}>Check it out</Link>
                </div>
            </div>
        </div>
    )
}
