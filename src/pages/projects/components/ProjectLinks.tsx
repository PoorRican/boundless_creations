import {ProjectLinkIface} from "../../../components/ProjectCard";
import {ProjectLink} from "./ProjectLink";
import React from "react";

/**
 * Component for rendering a list of project links.
 * @param props - className for parent component and list of project links
 */
export const ProjectLinks = (props: { className?: string, links: ProjectLinkIface[] }) => {
  if (props.links) {
    return (
      <div className={`${props.className}`}>
        <h3 className={"text-lg font-light mb-2"}>
          Links:
        </h3>
        <ul className={"flex flex-row gap-4"}>
          {props.links.map(({name, url}: ProjectLinkIface) => <ProjectLink key={name} name={name} url={url}/>
          )}
        </ul>
      </div>
    )
  } else {
    return <></>
  }
}