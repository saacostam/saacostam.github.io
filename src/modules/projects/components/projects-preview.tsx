import { useMemo } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { ProjectCard } from "./project.card";
import { LeanProject } from "../types";
import { useProjectFilterUrl } from "../hooks";

export interface ProjectsPreviewProps {
  projects: LeanProject[];
}

export function ProjectsPreview({ projects: _projects }: ProjectsPreviewProps) {
  const { applyFilter, goToPageNumber } = useProjectFilterUrl();

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
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
      <section className="flex justify-center p-4">
        <div className="join">{pagination}</div>
      </section>
    </>
  );
}
