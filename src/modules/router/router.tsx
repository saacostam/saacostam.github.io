import { RouterProvider as ReactRouterProvider, createHashRouter } from "react-router-dom";

import { routes } from './route.constants';

const router = createHashRouter(routes);

export const RouterProvider = () => {
    return (
        <ReactRouterProvider router={router}/>
    )
}
