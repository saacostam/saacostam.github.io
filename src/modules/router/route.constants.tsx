import { Navigate, RouteObject } from "react-router-dom";

import { ProjectsPage, NotFoundPage, ProjectPage, HomePage } from "../../pages";

export enum RoutePath {
  homePage = "",
  projectsPage = "/projects",
  projectPage = "/projects/:id",
  notFoundPage = "/not-found",
  wildcard = "*",
}

export const routes: RouteObject[] = [
  {
    path: RoutePath.homePage,
    element: <HomePage />,
  },
  {
    path: RoutePath.projectsPage,
    element: <ProjectsPage />,
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
