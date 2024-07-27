import { ReactNode } from "react"
import { useQuery } from "react-query";

import { getAllLeanProjects } from "../fetching";
import { ProjectCardSkeleton } from "./project.card";
import { Project } from "../project.type"
import { QueryKeys } from "../../react-query";
import { ErrorHandler } from "../../core";

export interface ProjectsGateProps {
    ProjectOnSuccess: (props: { projects: Project[] }) => ReactNode;
}

export function ProjectsGate({
    ProjectOnSuccess,
}: ProjectsGateProps) {
    const { data, error, isSuccess, isError, isLoading } = useQuery<Project[], Error>({
        queryFn: () => getAllLeanProjects(),
        queryKey: QueryKeys.ALL_LEAN_PROJECTS,
    });

    if (isLoading) {
        return <>
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
        </>
    }

    if (isError) {
        return <ErrorHandler
            errors={[
                [isError, error]
            ]}
        />
    }

    if (isSuccess) {
        return <ProjectOnSuccess projects={data} />
    }

    return null;
}
