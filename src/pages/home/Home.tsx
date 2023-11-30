import ContactSection from "../../components/ContactSection";
import projects from "../../assets/projects.json";
import ContentWrapper from "../../components/ContentWrapper";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import ProjectSection from "../../components/ProjectSection";
import {Blurb} from "../../components/Blurb";
import intro_blurb from "./components/intro_blurb.json";

const Home = () => {

  useEffect(() => {
    document.title = 'Home | Josué Figueroa';
  }, []);

  return (
    <ContentWrapper>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <Blurb content={intro_blurb}/>

        <div className={"flex flex-col gap-8"}>
          <ContactSection className="ring-1 p-6 rounded-xl" />
        </div>

        <div className="md:col-start-1 md:col-end-3">
          <h2 className="text-2xl font-thin ml-2 mb-12">
            Recent Projects:

            <Link to={'/projects'}>
              <button className="rounded bg-slate-800 border-2 border-slate-700 p-1 text-sm ml-4 hover:bg-slate-700">More Projects</button>
            </Link>

          </h2>
          <ProjectSection projects={projects.slice(0, 3)} />
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Home;