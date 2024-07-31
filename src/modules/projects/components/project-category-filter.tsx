import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { ProjectFilterUrlState, UpdateFilter } from "../hooks";
import { ProjectCategory } from "../types";
import { useMemo } from "react";

export interface ProjectCategoryFilterProps {
  color: string;
  category: ProjectCategory;
  updateFilter: UpdateFilter;
  state: ProjectFilterUrlState;

  className: string;
}

export function ProjectCategoryFilter({
  color,
  state,
  category,
  updateFilter,

  className,
}: ProjectCategoryFilterProps) {
  const isSelected = state.categories.includes(category);

  const newLink = useMemo(
    () =>
      !isSelected
        ? updateFilter((prevState) => ({
            ...prevState,
            categories: [...prevState.categories, category],
          }))
        : updateFilter((prevState) => ({
            ...prevState,
            categories: prevState.categories.filter(
              (filterCategory) => filterCategory !== category,
            ),
          })),
    [category, isSelected, updateFilter],
  );

  return (
    <Link
      to={newLink}
      className={twMerge(
        "btn",
        `btn-${color}`,
        className,
        !isSelected ? `btn-outline` : "",
      )}
    >
      {category}
    </Link>
  );
}
