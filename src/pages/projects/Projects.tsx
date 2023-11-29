import {useEffect} from "react";
import projects from "../../assets/projects.json"
import ProjectSection from "../../components/ProjectSection";
import ContentWrapper from "../../components/ContentWrapper";


/**
 * This is the Projects listing page.
 */
const Projects = () => {

  useEffect(() => {
    document.title = 'Projects | Josué Figueroa';
  }, []);

  return (
    <ContentWrapper>
      <h1 className={"mb-12 text-4xl font-thin"}>Projects</h1>

      <ProjectSection projects={projects} className={""} />
    </ContentWrapper>
  )
}

export default Projects;