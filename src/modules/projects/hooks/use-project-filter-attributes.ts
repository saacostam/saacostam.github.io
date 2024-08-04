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
    const allProjectCategories: ProjectCategory[] = projects.map(
      ({ category }) => category,
    );
    return removeDuplicateStrings(allProjectCategories) as ProjectCategory[];
  }, [projects]);

  return {
    categories,
  };
}
