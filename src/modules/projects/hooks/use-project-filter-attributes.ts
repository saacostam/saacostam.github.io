import { useMemo } from "react";

import { removeDuplicateStrings } from "../../array-utils";
import { LeanProject, ProjectCategory } from "../types";

export interface UseProjectFilterAttributesProps {
  projects: LeanProject[];
}

export function useProjectFilterAttributes({
  projects,
}: UseProjectFilterAttributesProps) {
  const categories = useMemo(() => {
    const allProjectCategories: ProjectCategory[] = projects.reduce(
      (allProjectCategories: ProjectCategory[], { category }: LeanProject) => {
        if (category instanceof Array) allProjectCategories.push(...category);
        else allProjectCategories.push(category);

        return allProjectCategories;
      },
      [],
    );

    return removeDuplicateStrings(allProjectCategories) as ProjectCategory[];
  }, [projects]);

  return {
    categories,
  };
}
