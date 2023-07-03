import ContactSection from "../components/ContactSection";
import projects from "../assets/projects.json";
import Main from "../components/ContentWrapper";
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import about_me from "../assets/site_blurb.md";
import React from "react";
import ProjectSection from "../components/ProjectSection";

const Blurb = (props: {className?: string}) => {
  const [text, setText] = React.useState('');
  fetch(about_me as string).then((value) => {
    return value.text();
  }).then((value) => {
    setText(value);
  });
  return (
    <div className={props.className}>
      <ReactMarkdown
        components={{
          p: ({node, ...props}) => <p className="text-base mb-2 font-thin" {...props} />,
          h1: ({node, ...props}) => <h1 className="text-2xl mb-2 font-thin" {...props} />
        }}

      >{text}</ReactMarkdown>
    </div>
  )
}

const Home = () => {
  return (
    <Main>
      <h1 className="mt-16 mb-8 text-4xl font-thin">
        <span className="border-b border-slate-600 pr-4 pb-2">
          Josué Figueroa
        </span>
      </h1>

      <div className="grid md:grid-cols-2 gap-16">
        <AboutMeBlurb className="mb-4"/>
        <ContactSection className="ring-1 h-40 p-6 rounded-xl" />

        <div className="md:col-start-1 md:col-end-3">
          <h2 className="text-2xl font-thin ml-2 mb-4">
            Recent Projects:

            <Link to={'/projects'}>
              <button className="rounded bg-slate-800 border-2 border-slate-700 p-1 text-sm ml-4 hover:bg-slate-700">More Projects</button>
            </Link>

          </h2>
          <ProjectSection projects={projects.slice(0, 3)} />
        </div>
      </div>
    </Main>
  )
}

export default Home;