import projects from "../assets/projects.json"
import ProjectSection from "../components/ProjectSection";
import ContentWrapper from "../components/ContentWrapper";
import {add_project_images} from "../helpers";


const Projects = () => {
    return (
      <ContentWrapper>
        <h1 className={"mt-16 mb-12 text-2xl"}>Projects</h1>

        <ProjectSection projects={add_project_images(projects)} className={""} />
      </ContentWrapper>
    )
}

export default Projects;