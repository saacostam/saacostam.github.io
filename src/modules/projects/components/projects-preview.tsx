import { useMemo } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { ProjectCard } from "./project.card";
import { LeanProject } from "../types";
import { useProjectFilterAttributes, useProjectFilterUrl } from "../hooks";
import { EmptySearch } from "./empty-search";
import { FilterIcon } from "../../icons";
import { ProjectCategoryFilter } from "./project-category-filter";

export interface ProjectsPreviewProps {
  projects: LeanProject[];
}

export function ProjectsPreview({ projects: _projects }: ProjectsPreviewProps) {
  const { categories } = useProjectFilterAttributes({
    projects: _projects,
  });
  const {
    state,
    applyFilter,
    resetFilter,
    goToPageNumber,
    addCategoryToFilter,
    removeCategoryToFilter,
  } = useProjectFilterUrl();

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
      <section className="py-4 px-8 bg-base-200 text-primary rounded-2xl mb-4">
        <h6 className="font-semibold mb-3">
          <FilterIcon className="inline" /> Category
        </h6>
        {categories.map((category) => (
          <ProjectCategoryFilter
            state={state}
            color="primary"
            category={category}
            onApplyFilterLink={addCategoryToFilter(category)}
            onRemoveFilterLink={removeCategoryToFilter(category)}
            className="mr-2 btn-sm mb-2"
          />
        ))}
      </section>
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))
      ) : (
        <EmptySearch resetFilter={resetFilter} />
      )}
      <section className="flex justify-center p-4">
        <div className={pagination.length > 1 ? "join" : ""}>{pagination}</div>
      </section>
    </>
  );
}
