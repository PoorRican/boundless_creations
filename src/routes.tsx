import Home from "./pages/Home";
import Projects from "./pages/Projects";
import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./pages/error-page";
import Project from "./pages/Project";
import {loader as projectLoader} from "./routes/projects"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        index: true,
        element: <Home/>
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: "/project/:projectId",
        element: <Project />,
        loader: projectLoader,
      }
    ]

  },
]);