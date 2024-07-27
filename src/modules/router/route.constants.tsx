import { Navigate, RouteObject } from "react-router-dom";

import { HomePage, NotFoundPage, ProjectPage } from "../../pages";

export enum RoutePath {
  homePage = "",
  projectPage = "/project/:id",
  notFoundPage = "/not-found",
  wildcard = "*",
}

export const routes: RouteObject[] = [
  {
    path: RoutePath.homePage,
    element: <HomePage />,
  },
  {
    path: RoutePath.projectPage,
    element: <ProjectPage />,
  },
  {
    path: RoutePath.notFoundPage,
    element: <NotFoundPage />,
  },
  {
    path: RoutePath.wildcard,
    element: <Navigate to={RoutePath.notFoundPage} />,
  },
];
