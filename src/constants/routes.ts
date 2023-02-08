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
    path: routePaths.HOME,
    component: lazy(() => import("../pages/Home")),
    name: "Home",
  },
  {
    path: routePaths.DASHBOARD,
    component: lazy(() => import("../pages/Dashboard")),
    name: "Dashboard",
  },
  {
    path: routePaths.PROJECTS,
    component: lazy(() => import("../pages/Projects")),
    name: "Projects",
  },
  {
    path: routePaths.TASKS,
    component: lazy(() => import("../pages/Tasks")),
    name: "Tasks",
  },
  {
    path: routePaths.REPORTING,
    component: lazy(() => import("../pages/Reporting")),
    name: "Reporting",
  },
  {
    path: routePaths.USERS,
    component: lazy(() => import("../pages/Users")),
    name: "Users",
  },
  {
    path: routePaths.SETTINGS,
    component: lazy(() => import("../pages/Settings")),
    name: "Settings",
  },
];
