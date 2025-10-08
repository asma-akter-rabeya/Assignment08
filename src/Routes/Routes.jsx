import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayouts,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <h1>Loading</h1>,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/apps',
                Component: AllApps,
            },
        ]
    }
]);

export default router;