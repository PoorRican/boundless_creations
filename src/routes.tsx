import Home from "./pages/Home";
import Projects from "./pages/Projects";
import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./pages/error-page";
import Project from "./pages/Project";
import {loader as projectLoader} from "./routes/projects"

export interface Endpoint {
  name: string;
  path: string;
  index?: boolean;
  element: React.ReactNode;
}

export const routes: Endpoint[] = [
  {
    name: 'Home',
    path: '/home',
    index: true,
    element: <Home/>
  },
  {
    name: 'Projects',
    path: '/projects',
    element: <Projects />,
  },
];
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: routes
  },
  {
    path: "/project/:projectId",
    element: <Project />,
    loader: projectLoader,
  }
]);