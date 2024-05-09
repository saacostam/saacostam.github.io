import { Header } from "../core";
import { Skills } from "../skills";
import { Project } from "./project.type";

export interface ProjectContentProps {
  project: Project;
}

export const ProjectContent = ({
  project: { name, navigation, skills, longDescription },
}: ProjectContentProps) => {
  return (
    <section>
      <Header className="text-center mb-8" size="2xl" headerLevel={2}>
        {name}
      </Header>
      {navigation.type === "component" && navigation.component}
      {navigation.type === "external" && (
        <>
          {longDescription}
          <Skills
            skills={skills}
            className="my-4 flex justify-center w-full"
            color="info"
          />
          <iframe
            src={navigation.href}
            width="100%"
            height={navigation.height ?? 950}
          ></iframe>
          <div className="flex justify-center mt-4">
            <a
              href={navigation.href}
              target="_blank"
              className="btn btn-outline btn-primary btn-sm"
            >
              Go To Page
            </a>
          </div>
        </>
      )}
    </section>
  );
};
