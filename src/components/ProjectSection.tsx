import {ProjectCard, ProjectIface} from "./ProjectCard";
import React from "react";

const ProjectSection = (props: {className?: string, projects: ProjectIface[]}) => {
  return (
    <ul className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${props.className}`}>
      {props.projects.map(({id,
                            title,
                            summary,
                            status}) => {
        return (
          <li key={id}>
            <ProjectCard id={id} title={title} summary={summary} status={status} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectSection;