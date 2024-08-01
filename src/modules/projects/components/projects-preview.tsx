import { useMemo } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { ProjectCard } from "./project.card";
import { LeanProject } from "../types";
import { useProjectFilterUrl } from "../hooks";
import { SearchIcon, XIcon } from "../../icons";

export interface ProjectsPreviewProps {
  projects: LeanProject[];
}

export function ProjectsPreview({ projects: _projects }: ProjectsPreviewProps) {
  const { applyFilter, resetFilter, goToPageNumber } = useProjectFilterUrl();

  const { projects, minPage, maxPage, pageNumber } = useMemo(() => {
    return applyFilter(_projects);
  }, [_projects, applyFilter]);

  const pagination = useMemo(() => {
    const paginationRadioButtons = [];

    for (let page = minPage; page <= maxPage; page++) {
      paginationRadioButtons.push(
        <Link
          key={page}
          type="radio"
          to={goToPageNumber(page)}
          aria-label={String(page)}
          className={twMerge(
            "join-item btn btn-square btn-primary text-primary-content",
            page === pageNumber ? "" : "btn-outline",
          )}
        >
          {page}
        </Link>,
      );
    }

    return paginationRadioButtons;
  }, [minPage, maxPage, pageNumber, goToPageNumber]);

  return (
    <>
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))
      ) : (
        <section className="bg-base-200 pt-16 pb-12 mb-8 rounded-3xl flex flex-col items-center">
          <SearchIcon className="text-white w-48 h-48 mb-4 bg-secondary p-8 rounded-full" />
          <h3 className="text-secondary font-semibold text-3xl mb-2">
            No results found!
          </h3>
          <p className="mb-4">Adjust your filters and try again.</p>
          <Link
            to={resetFilter()}
            className="btn btn-secondary btn-outline w-64"
          >
            <XIcon /> Reset filters
          </Link>
        </section>
      )}
      <section className="flex justify-center p-4">
        <div className={pagination.length > 1 ? "join" : ""}>{pagination}</div>
      </section>
    </>
  );
}
