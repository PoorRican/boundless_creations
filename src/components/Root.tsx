import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import React from "react";
import { routes } from "../routes";


export default function Root() {
  return (
    <>
      <Heading routes={routes} />

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}