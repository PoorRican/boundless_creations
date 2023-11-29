import {ProjectCard, ProjectIface} from "./ProjectCard";
import React from "react";

const ProjectSection = (props: {className?: string, projects: ProjectIface[]}) => {
  return (
    <ul className={`grid md:grid-cols-2 lg:grid-cols-3 gap-12 ${props.className}`}>
      {props.projects.map((project) => {
        return (
          <li key={project.id}>
            <ProjectCard {...project} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectSection;