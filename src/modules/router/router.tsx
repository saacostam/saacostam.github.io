import {
  RouterProvider as ReactRouterProvider,
  createHashRouter,
} from "react-router-dom";

import { routes } from "./route.constants";

const router = createHashRouter(routes);

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
