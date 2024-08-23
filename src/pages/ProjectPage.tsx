import { useParams, useNavigate, ScrollRestoration } from "react-router-dom";
import { useQuery } from "react-query";

import { getProjectById } from "../modules/projects/fetching";
import {
  ProjectContent,
  ProjectContentSkeleton,
  ProjectDto,
  SimilarProjects,
} from "../modules/projects";
import { QueryKeys } from "../modules/react-query";
import { RoutePath } from "../modules/router";

export function ProjectPage() {
  const goTo = useNavigate();

  const { id } = useParams();

  const { data, isLoading, isSuccess } = useQuery<ProjectDto>({
    queryFn: () => getProjectById({ id: id || "" }),
    queryKey: [QueryKeys.PROJECT_BY_ID, id],
    onError(err) {
      console.error(err);
      goTo(RoutePath.notFoundPage);
    },
  });

  if (isLoading) {
    return <ProjectContentSkeleton />;
  }

  if (isSuccess) {
    return (
      <>
        <ProjectContent project={data} className="mb-12" />
        <SimilarProjects similarProjects={data.similarProjects} />
        <ScrollRestoration />
      </>
    );
  }

  return null;
}
