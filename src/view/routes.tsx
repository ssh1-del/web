import React, {lazy} from "react";
import {RouteObject} from "react-router-dom";

const Layout = lazy(() => import("./Layout"));
const routes: RouteObject[] = [
    {
        path: "/",
        element: <React.Suspense fallback={<>...</>}>
            <Layout/>
        </React.Suspense>,
    },
    {
        path: "html",
        element: <React.Suspense fallback={<>...</>}>
            <Layout/>
        </React.Suspense>,
    },
    {
        path: "css",
        element: <React.Suspense fallback={<>...</>}>
            <Layout/>
        </React.Suspense>,
    },
    {
        path: "javaScript",
        element: <React.Suspense fallback={<>...</>}>
            <Layout/>
        </React.Suspense>,
    }
];

export default routes;
