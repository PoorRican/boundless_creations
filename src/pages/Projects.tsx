import projects from "../assets/projects.json"
import ProjectSection from "../components/ProjectSection";
import ContentWrapper from "../components/ContentWrapper";


const Projects = () => {
    return (
      <ContentWrapper>
        <h1 className={"mt-16 mb-8 text-2xl"}>Projects</h1>

        <ProjectSection projects={projects} className={""} />
      </ContentWrapper>
    )
}

export default Projects;