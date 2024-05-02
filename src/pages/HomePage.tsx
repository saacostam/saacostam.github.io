import { projectRepository } from "../data/projects"
import { ProjectCard } from "../modules/projects";

export const HomePage = () => {
    const projects = projectRepository.get();

    return (
        <>
            <h2 className="text-center text-2xl text-primary font-bold mb-8">Projects</h2>
            {
                projects.map(project => <ProjectCard project={project} key={project.id}/>)
            }
        </>
    )
}
