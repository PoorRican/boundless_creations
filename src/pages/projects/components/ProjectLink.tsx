import {ProjectLinkIface} from "../../../components/ProjectCard";
import React from "react";

/**
 * Component for rendering a project link.
 * @param props - name and url of the project link
 */
export const ProjectLink = (props: ProjectLinkIface) => {
  return (
    <a href={props.url}
       className={"px-2 items-center " +
         "bg-slate-400 rounded-md " +
         "ring-1 ring-inset " +
         "hover:bg-slate-300"}>
      <span className={"font-thin text-white text-sm"}>
        {props.name}
      </span>
    </a>
  )
}