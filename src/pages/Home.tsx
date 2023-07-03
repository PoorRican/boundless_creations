import ContactSection from "../components/ContactSection";
import projects from "../assets/projects.json";
import {Project} from "../components/Project";
import Main from "../components/ContentWrapper";
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import about_me from "../assets/about_me.md";
import React from "react";

const AboutMe = () => {
  const [text, setText] = React.useState('');
  fetch(about_me as string).then((value) => {
    return value.text();
  }).then((value) => {
    setText(value);
  });
  return (
    <div className="mt-6">
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
        <div className="mt-1">
          <ContactSection className="ring-1 h-40 p-6 rounded-xl" />
          <AboutMe />
        </div>

        <div>
          <h2 className="text-2xl font-thin ml-2 mb-4">
            Recent Projects:

            <Link to={'/projects'}>
              <button className="rounded bg-slate-800 border-2 border-slate-700 p-1 text-sm ml-4 hover:bg-slate-700">More Projects</button>
            </Link>

          </h2>
          <ul className="flex flex-col gap-4">
            {projects.slice(0, 2).map(({title, description, status}) => {
              return (
                <li key={title}>
                  <Project title={title} description={description} status={status} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Main>
  )
}

export default Home;