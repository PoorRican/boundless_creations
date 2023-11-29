import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import React from "react";


/**
 * Root component for the entire site.
 *
 * This component wraps the `Heading` element and includes the page content.
 */
export default function Root() {
  return (
    <>
      <Heading />

      <Outlet />
    </>
  );
}