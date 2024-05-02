import { useParams, Navigate } from "react-router-dom"

import { projectRepository } from "../data/projects";
import { ProjectContent } from "../modules/projects";
import { RoutePath } from "../modules/router";
import { Skills } from "../modules/skills";

export const ProjectPage = () => {
    const { id } = useParams();

    const project = projectRepository.getById(id);
    if (!project) return <Navigate to={RoutePath.notFoundPage}/>

    const {
        name,
        navigation,

        skills,
    } = project;

    return (
        <>
            <h2 className="text-center text-2xl text-primary font-bold mb-8">{name}</h2>
            <Skills skills={skills} className="mb-4"/>
            <ProjectContent navigation={navigation}/>
        </>
    )
}
