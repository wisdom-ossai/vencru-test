import { lazy } from "react";
import homeIcon from "../assets/sidebarIcons/home.svg";
import dashboardIcon from "../assets/sidebarIcons/dashboard.svg";
import projectsIcon from "../assets/sidebarIcons/projects.svg";
import tasksIcon from "../assets/sidebarIcons/tasks.svg";
import reportingIcon from "../assets/sidebarIcons/reporting.svg";
import usersIcon from "../assets/sidebarIcons/users.svg";
import supportIcon from "../assets/sidebarIcons/support.svg";
import settingsIcon from "../assets/sidebarIcons/settings.svg";

export const routePaths = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  PROJECTS: "/projects",
  TASKS: "/tasks",
  REPORTING: "/reporting",
  USERS: "/users",
  SUPPORT: "/support",
  SETTINGS: "/settings",
};

export const routes = [
  {
    path: routePaths.HOME,
    component: lazy(() => import("../pages/Home")),
    name: "Home",
    icon: homeIcon,
  },
  {
    path: routePaths.DASHBOARD,
    component: lazy(() => import("../pages/Dashboard")),
    name: "Dashboard",
    icon: dashboardIcon,
  },
  {
    path: routePaths.PROJECTS,
    component: lazy(() => import("../pages/Projects")),
    name: "Projects",
    icon: projectsIcon,
  },
  {
    path: routePaths.TASKS,
    component: lazy(() => import("../pages/Tasks")),
    name: "Tasks",
    icon: tasksIcon,
  },
  {
    path: routePaths.REPORTING,
    component: lazy(() => import("../pages/Reporting")),
    name: "Reporting",
    icon: reportingIcon,
  },
  {
    path: routePaths.USERS,
    component: lazy(() => import("../pages/Users")),
    name: "Users",
    icon: usersIcon,
  },
];

export const bottomRoutes = [
  {
    path: routePaths.SUPPORT,
    component: lazy(() => import("../pages/Support")),
    name: "Support",
    icon: supportIcon,
  },
  {
    path: routePaths.SETTINGS,
    component: lazy(() => import("../pages/Settings")),
    name: "Settings",
    icon: settingsIcon,
  },
];
