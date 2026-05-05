import { createBrowserRouter } from "react-router";
import { routePaths } from "../../shared/config/routePaths";
import Layout from "../layouts/layout";

export const router = createBrowserRouter([
    {
        path: routePaths.home,
        element: <Layout />,
        children: []
    }
])