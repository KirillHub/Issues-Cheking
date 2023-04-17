import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouteObject
} from "react-router-dom";
import Project from "./Project";
import PageError from "./shared/component/PageError";
import { createBrowserHistory } from "history";
import ProjectBoardListIssue from "./Project/Issue";

const history = createBrowserHistory();

export const links = {
  project: "/project",
  issueCard: "/issuer-card"
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to='/project' />
  },
  {
    path: "/project",
    element: <Project />
  },
  {
    path: "/issuer-card",
    element: <ProjectBoardListIssue />
  },
  {
    path: "*",
    element: <PageError />
  }
];

const router = createBrowserRouter(
  createRoutesFromElements(
    routes.map(({ path, element }) => <Route key={path} path={path} element={element} />)
  )
);

export default router;
