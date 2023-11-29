import ContactSection from "../../components/ContactSection";
import projects from "../../assets/projects.json";
import ContentWrapper from "../../components/ContentWrapper";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import ProjectSection from "../../components/ProjectSection";
import {add_project_images} from "../../helpers";
import {Blurb} from "./components/Blurb";
import {InterestsSection} from "./components/InterestsSection";

const Home = () => {

  useEffect(() => {
    document.title = 'Home | Josué Figueroa';
  }, []);

  return (
    <ContentWrapper>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <Blurb />

        <div className={"flex flex-col gap-8"}>
          <ContactSection className="ring-1 p-6 rounded-xl" />
          <InterestsSection className={"ring-1 rounded-xl p-6"}/>
        </div>

        <div className="md:col-start-1 md:col-end-3">
          <h2 className="text-2xl font-thin ml-2 mb-12">
            Recent Projects:

            <Link to={'/projects'}>
              <button className="rounded bg-slate-800 border-2 border-slate-700 p-1 text-sm ml-4 hover:bg-slate-700">More Projects</button>
            </Link>

          </h2>
          <ProjectSection projects={add_project_images(projects.slice(0, 3))} />
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Home;