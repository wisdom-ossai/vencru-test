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
    notificationCount: 0,
  },
  {
    path: routePaths.DASHBOARD,
    component: lazy(() => import("../pages/Dashboard")),
    name: "Dashboard",
    icon: dashboardIcon,
    notificationCount: 10,
  },
  {
    path: routePaths.PROJECTS,
    component: lazy(() => import("../pages/Projects")),
    name: "Projects",
    icon: projectsIcon,
    notificationCount: 0,
  },
  {
    path: routePaths.TASKS,
    component: lazy(() => import("../pages/Tasks")),
    name: "Tasks",
    icon: tasksIcon,
    notificationCount: 0,
  },
  {
    path: routePaths.REPORTING,
    component: lazy(() => import("../pages/Reporting")),
    name: "Reporting",
    icon: reportingIcon,
    notificationCount: 0,
  },
  {
    path: routePaths.USERS,
    component: lazy(() => import("../pages/Users")),
    name: "Users",
    icon: usersIcon,
    notificationCount: 0,
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
