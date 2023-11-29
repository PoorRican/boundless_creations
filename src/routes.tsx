import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import React from "react";
import {createBrowserRouter, redirect} from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./pages/error-page";
import Project from "./pages/projects/Project";
import {loader as projectLoader} from "./routes/projects"

export const router = createBrowserRouter([
  {
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
  {
    path: '/',
    loader: () => {
      return redirect('/home')
    }
  }
]);