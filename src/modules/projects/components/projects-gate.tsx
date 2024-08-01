import { ReactNode } from "react";
import { useQuery } from "react-query";

import { getAllLeanProjects } from "../fetching";
import { ProjectCardSkeleton } from "./project.card";
import { LeanProject } from "../types";
import { QueryKeys } from "../../react-query";
import { ErrorHandler } from "../../core";

export interface ProjectsGateProps {
  ProjectOnSuccess: (props: { projects: LeanProject[] }) => ReactNode;
}

export function ProjectsGate({ ProjectOnSuccess }: ProjectsGateProps) {
  const { data, error, isSuccess, isError, isLoading } = useQuery<
    LeanProject[],
    Error
  >({
    queryFn: () => getAllLeanProjects(),
    queryKey: QueryKeys.ALL_LEAN_PROJECTS,
  });

  if (isLoading) {
    return (
      <>
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </>
    );
  }

  if (isError) {
    return <ErrorHandler errors={[[isError, error]]} />;
  }

  if (isSuccess) {
    return <ProjectOnSuccess projects={data} />;
  }

  return null;
}
