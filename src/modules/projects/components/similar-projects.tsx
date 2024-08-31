import { Header } from "../../core";
import { FireIcon } from "../../icons";
import { useMyRouter } from "../../router";
import { LeanProject } from "../types";
import { TopProjectsCard } from "./top-projects";

export interface SimilarProjectsProps {
  similarProjects: LeanProject[];
}

export function SimilarProjects({ similarProjects }: SimilarProjectsProps) {
  const { getProjectLink } = useMyRouter();

  return (
    <section className="bg-base-200 p-8 rounded-2xl">
      <div className="divider flex justify-center mb-12">
        <Header headerLevel={3} size="2xl" className="text-center">
          <FireIcon className="inline mr-2 w-6 h-6" />
          Related Projects
        </Header>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {similarProjects.map((project) => (
          <TopProjectsCard
            key={project.id}
            project={project}
            getProjectLink={getProjectLink}
          />
        ))}
      </div>
    </section>
  );
}
