import Home from "./pages/Home";
import Projects from "./pages/Projects";
import React from "react";

export interface Endpoint {
  name: string;
  path: string;
  index?: boolean;
  element: React.ReactNode;
}

const routes: Endpoint[] = [
  {
    name: 'Home',
    path: '/home',
    index: true,
    element: <Home/>
  },
  {
    name: 'Projects',
    path: '/projects',
    element: <Projects/>
  },
];
export default routes;
