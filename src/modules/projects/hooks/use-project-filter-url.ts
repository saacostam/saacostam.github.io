import { useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { removeDuplicateStrings } from "../../array-utils";
import { LeanProject, ProjectCategory } from "../types";
import { PROJECTS_PREVIEW_CONFIG } from "../config";

export interface ProjectFilterUrlState {
  categories: string[];
  pageNumber: number;
}

export type FilterParam = keyof ProjectFilterUrlState;

type UpdateFilterCallback =
  | ProjectFilterUrlState
  | ((prevState: ProjectFilterUrlState) => ProjectFilterUrlState);

export type UpdateFilter = (state: UpdateFilterCallback) => string;
export type AddCategoryToFilter = (category: ProjectCategory) => string;
export type RemoveCategoryToFilter = (category: ProjectCategory) => string;
export type GoToPageNumber = (pageNumber: number) => string;

export type ApplyFilter = (projects: LeanProject[]) => ProjectPagination;
interface ProjectPagination {
  projects: LeanProject[];
  minPage: number;
  maxPage: number;
  pageNumber: number;
}

export function useProjectFilterUrl() {
  const { search, pathname } = useLocation();

  const state: ProjectFilterUrlState = useMemo(() => {
    const urlSearchParams = new URLSearchParams(search);

    const categories = removeDuplicateStrings(
      urlSearchParams.getAll("category"),
    );

    const rawPageNumber = urlSearchParams.get("pageNumber");
    const pageNumber = Math.max(
      !Number.isNaN(Number(rawPageNumber)) ? Number(rawPageNumber) : 1,
      1,
    );

    return {
      pageNumber,
      categories,
    };
  }, [search]);

  const updateFilter: UpdateFilter = useCallback(
    (_state: UpdateFilterCallback): string => {
      const newState = typeof _state === "function" ? _state(state) : _state;

      newState.categories = removeDuplicateStrings(newState.categories);

      const newUrlSearchParams = new URLSearchParams();

      for (const category of newState.categories) {
        newUrlSearchParams.append("category", category);
      }

      newUrlSearchParams.append("pageNumber", String(newState.pageNumber));

      return `${pathname}?${newUrlSearchParams.toString()}`;
    },
    [state, pathname],
  );

  const addCategoryToFilter: AddCategoryToFilter = useCallback(
    (category: ProjectCategory) => {
      return updateFilter((state) => ({
        ...state,
        categories: [...state.categories, category],
        pageNumber: 1,
      }));
    },
    [updateFilter],
  );

  const removeCategoryToFilter: RemoveCategoryToFilter = useCallback(
    (category: ProjectCategory) => {
      return updateFilter((state) => ({
        ...state,
        categories: state.categories.filter(
          (filterCategory) => filterCategory !== category,
        ),
        pageNumber: 1,
      }));
    },
    [updateFilter],
  );

  const goToPageNumber: GoToPageNumber = useCallback(
    (pageNumber: number) => {
      return updateFilter((state) => ({
        ...state,
        pageNumber: pageNumber,
      }));
    },
    [updateFilter],
  );

  const applyFilter: ApplyFilter = useCallback(
    (_projects: LeanProject[]) => {
      const { pageNumber } = state;

      // FILTERING
      const descendingOrder = (a: LeanProject, b: LeanProject) =>
        b.rating - a.rating;
      const projects = _projects
        .filter(
          ({ category }) =>
            state.categories.length === 0 ||
            state.categories.includes(category),
        )
        .sort(descendingOrder);
      const totalProjects = projects.length;

      // PAGINATION
      const maxPage =
        Math.floor((totalProjects - 1) / PROJECTS_PREVIEW_CONFIG.PER_PAGE) +
          1 || 1;

      const inclusiveLeftBound =
        (pageNumber - 1) * PROJECTS_PREVIEW_CONFIG.PER_PAGE;
      const inclusiveRightBound =
        pageNumber * PROJECTS_PREVIEW_CONFIG.PER_PAGE - 1;

      const projectsSlice = projects.slice(
        inclusiveLeftBound,
        Math.min(inclusiveRightBound + 1, totalProjects),
      );

      return {
        projects: projectsSlice,
        minPage: 1,
        maxPage: maxPage,
        pageNumber: pageNumber,
      };
    },
    [state],
  );

  return {
    state,
    applyFilter,
    goToPageNumber,
    addCategoryToFilter,
    removeCategoryToFilter,
  };
}
