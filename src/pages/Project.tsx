import ContentWrapper from "../components/ContentWrapper";
import {StatusBadge} from "../components/StatusBadge";
import {useLoaderData} from "react-router-dom";
import {ProjectLinkIface} from "../components/ProjectCard";
import ReactMarkdown from "react-markdown";

const ProjectLink = (props: ProjectLinkIface) => {
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

const ProjectLinks = (props: { className?: string, links: ProjectLinkIface[] }) => {
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

const Description = (props: {description: string}) => {
  if (props.description) {
    return (
      <div className={"mt-2"}>
        <h2 className={"text-lg mb-2 font-light"}>
          Description
        </h2>
        <ReactMarkdown className={"font-thin"}>
          {props.description}
        </ReactMarkdown>
      </div>
    )
  } else {
    return <></>
  }
}

const Project = () => {
  const project: any = useLoaderData();

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