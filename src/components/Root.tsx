import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import React from "react";


export default function Root() {
  return (
    <>
      <Heading />

      <Outlet />
    </>
  );
}