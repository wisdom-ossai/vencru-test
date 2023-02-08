import { lazy } from "react";

export const routePaths = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  PROJECTS: "/projects",
  TASKS: "/tasks",
  REPORTING: "/reporting",
  USERS: "/users",
  SETTINGS: "/settings",
};

export const routes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Home")),
  },
  {
    path: routePaths.DASHBOARD,
    component: lazy(() => import("../pages/Dashboard")),
  },
  {
    path: routePaths.PROJECTS,
    component: lazy(() => import("../pages/Projects")),
  },
  {
    path: routePaths.TASKS,
    component: lazy(() => import("../pages/Tasks")),
  },
  {
    path: routePaths.REPORTING,
    component: lazy(() => import("../pages/Reporting")),
  },
  {
    path: routePaths.USERS,
    component: lazy(() => import("../pages/Users")),
  },
  {
    path: routePaths.SETTINGS,
    component: lazy(() => import("../pages/Settings")),
  },
];
