import {Project, ProjectIface} from "./Project";
import React from "react";

const ProjectSection = (props: {className?: string, projects: ProjectIface[]}) => {
  return (
    <ul className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${props.className}`}>
      {props.projects.map(({title, description, status}) => {
        return (
          <li key={title}>
            <Project title={title} description={description} status={status} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectSection;