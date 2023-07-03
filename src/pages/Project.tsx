import ContentWrapper from "../components/ContentWrapper";
import {StatusBadge} from "../components/StatusBadge";
import {useLoaderData} from "react-router-dom";
import Heading from "../components/Heading";

const Project = () => {
  const project: any = useLoaderData();

  return (
    <>
      <Heading />

      <ContentWrapper>
        <h1>{project.title}</h1>

        <StatusBadge status={project.status} />

        <p>{project.description}</p>
      </ContentWrapper>
    </>
  )
}

export default Project;