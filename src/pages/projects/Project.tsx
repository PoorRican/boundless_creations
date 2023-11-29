import ContentWrapper from "../../components/ContentWrapper";
import {StatusBadge} from "../../components/StatusBadge";
import {useLoaderData} from "react-router-dom";
import React, {useEffect} from "react";
import {ProjectLinks} from "./components/ProjectLinks";
import {Description} from "./components/Description";

/**
 * Component for rendering a project as a card.
 */
const Project = () => {
  const project: any = useLoaderData();

  useEffect(() => {
    document.title = `${project.title} | Project | Josué Figueroa`;
  }, []);


  return (
    <ContentWrapper>
      <article className={"bg-white rounded-lg max-w-prose p-8 md:p-16 mx-auto flex flex-col gap-4 text-black"}>
        {/** Project Title **/}
        <h1 className={"text-4xl font-thin"}>
          <span className={"border-b border-dashed border-slate-600"}>
            {project.title}
          </span>
        </h1>

        {/** Summary **/}
        <p className={"font-thin"}>{project.summary}</p>

        {/** Metadata **/}
        <section className={"flex flex-row flex-wrap gap-8 md:gap-12"}>
          {/** Status **/}
          <div className={"sm:w-1/4 mb-0"}>
            <h3 className={"font-light text-lg mb-2"}>
              Status:
            </h3>
            <StatusBadge status={project.status} className={"text-sm ml-1"}/>
          </div>

          {/** Project Links **/}
          <ProjectLinks links={project.links} className={""}/>
        </section>

        {/** Description **/}
        <Description description={project.description}/>
      </article>
    </ContentWrapper>
  )
}

export default Project;