import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./Layout")),
  },
  {
    path: "/home",
    component: lazy(() => import("./Home")),
  },
  {
    path: "/nomatch",
    component: lazy(() => import("./Nomatch")),
  },
  {
    path: "/about",
    component: lazy(() => import("./About")),
  },
  {
    path: "/intro",
    component: lazy(() => import("./Intro")),
  },
  {
    path: "/dashboard",
    component: lazy(() => import("./Dashboard")),
  },
];

// 路由处理方式
const generateRouter = (routers: any) => {
  return routers.map((item: any) => {
    if (item.children) {
      item.children = generateRouter(item.children);
    }
    item.element = (
      <React.Suspense fallback={<>...</>}>
        <item.component />
      </React.Suspense>
    );
    return item;
  });
};

export const Router = () => useRoutes(generateRouter(routes));
