import {useEffect} from "react";
import projects from "../assets/projects.json"
import ProjectSection from "../components/ProjectSection";
import ContentWrapper from "../components/ContentWrapper";
import {add_project_images} from "../helpers";


const Projects = () => {

  useEffect(() => {
    document.title = 'Projects | Josué Figueroa';
  }, []);

  return (
    <ContentWrapper>
      <h1 className={"mb-12 text-4xl font-thin"}>Projects</h1>

      <ProjectSection projects={add_project_images(projects)} className={""} />
    </ContentWrapper>
  )
}

export default Projects;