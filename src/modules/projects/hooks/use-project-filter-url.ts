import { useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { removeDuplicateStrings } from "../../array-utils";

export interface ProjectFilterUrlState {
  categories: string[];
}

export type FilterParam = keyof ProjectFilterUrlState;

type UpdateFilterCallback =
  | ProjectFilterUrlState
  | ((prevState: ProjectFilterUrlState) => ProjectFilterUrlState);

export type UpdateFilter = (state: UpdateFilterCallback) => string;

export function useProjectFilterUrl() {
  const { search, pathname } = useLocation();

  const state = useMemo(() => {
    const urlSearchParams = new URLSearchParams(search);

    const categories = removeDuplicateStrings(
      urlSearchParams.getAll("category"),
    );

    return {
      categories,
    };
  }, [search]);

  const updateFilter = useCallback(
    (_state: UpdateFilterCallback): string => {
      const newState = typeof _state === "function" ? _state(state) : _state;

      newState.categories = removeDuplicateStrings(newState.categories);

      const newUrlSearchParams = new URLSearchParams();

      for (const category of newState.categories) {
        newUrlSearchParams.append("category", category);
      }

      return `${pathname}?${newUrlSearchParams.toString()}`;
    },
    [state, pathname],
  );

  return useMemo(() => {
    return {
      state,
      updateFilter,
    };
  }, [state, updateFilter]);
}
