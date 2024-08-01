import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { ProjectFilterUrlState } from "../hooks";
import { ProjectCategory } from "../types";
import { ReactNode } from "react";

export interface ProjectCategoryFilterProps {
  icon: ReactNode;
  color: string;
  category: ProjectCategory;
  state: ProjectFilterUrlState;

  onApplyFilterLink: string;
  onRemoveFilterLink: string;

  className: string;
}

export function ProjectCategoryFilter({
  icon,
  color,
  state,
  category,
  onApplyFilterLink,
  onRemoveFilterLink,
  className,
}: ProjectCategoryFilterProps) {
  const isSelected = state.categories.includes(category);

  return (
    <Link
      to={!isSelected ? onApplyFilterLink : onRemoveFilterLink}
      className={twMerge(
        "btn",
        `btn-${color}`,
        className,
        !isSelected ? `btn-outline` : "",
      )}
    >
      {icon}
      {category}
    </Link>
  );
}
