import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { twMerge } from "tailwind-merge";

import { getTopProjects } from "../fetching";
import { LeanProject } from "../types";
import { QueryKeys } from "../../react-query";
import { ErrorHandler } from "../../core";
import { useMyRouter } from "../../router";
import { FETCH_STATIC_DATA } from "../../constants";

export function TopProjectsSkeleton() {
  return (
    <>
      <div className="skeleton h-64" />
      <div className="skeleton h-64" />
      <div className="skeleton h-64" />
      <div className="skeleton h-64" />
    </>
  );
}

export interface TopProjectsCardProps {
  project: LeanProject;
  getProjectLink: (projectId: string) => string;
}

export function TopProjectsCard({
  project: { id, name, smImage, description },
  getProjectLink,
}: TopProjectsCardProps) {
  return (
    <div className="card bg-base-300 shadow-xl">
      <figure className="opacity-60">
        <img src={`${FETCH_STATIC_DATA}${smImage}`} alt="Projects" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <p className="mb-4">{description}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" to={getProjectLink(id)}>
            Go To Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export function TopProjects() {
  const {
    data: projects,
    isSuccess,
    isError,
    isLoading,
    error,
  } = useQuery<LeanProject[], Error>({
    queryFn: () => getTopProjects(),
    queryKey: QueryKeys.TOP_PROJECTS,
  });
  const { getProjectLink } = useMyRouter();

  return (
    <section className="bg-base-200 rounded-2xl p-8">
      <h2 className="font-medium text-2xl text-center text-primary mb-8">
        My Favorite Projects
      </h2>
      <div
        className={twMerge(
          "grid grid-cols-1 md:grid-cols-2 gap-8",
          isError && "md:grid-cols-1",
        )}
      >
        {isLoading ? (
          <TopProjectsSkeleton />
        ) : isError ? (
          <ErrorHandler errors={[[isError, error]]} />
        ) : (
          isSuccess && (
            <>
              {projects.map((project) => (
                <TopProjectsCard
                  project={project}
                  getProjectLink={getProjectLink}
                />
              ))}
            </>
          )
        )}
      </div>
    </section>
  );
}
