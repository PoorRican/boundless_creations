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
          // eslint-disable-next-line jsx-a11y/heading-has-content
          "h1": ({node, ...props}) => <h1 className="text-2xl mb-2 font-thin" {...props} />
        }}

      >{text}</ReactMarkdown>
    </div>
  )
}

const InterestsSection = (props: {className?: string}) => {
  const interests = [
    "Synthetic biology",
    "Science Fiction",
    "Rust",
    "Python",
    "Biohacking",
    "Jesus",
    "BJJ",
    "Digital Art"
  ];
  return (
    <div className={props.className}>
      <h3 className={"text-xl font-light mb-8"}><span className={"border-b border-dashed border-slate-500 pr-2 pb-1"}>Interests</span></h3>
      <ul className={"flex flex-row gap-8 flex-wrap"}>
        {interests.map( (interest) => <li className={"min-w-fit font-thin border-b border-dashed border-slate-700 pb-1"} key={interest}>{interest}</li> )}
      </ul>
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

      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <Blurb />

        <div className={"flex flex-col gap-8"}>
          <ContactSection className="ring-1 h-40 p-6 rounded-xl" />
          <InterestsSection className={"ring-1 rounded-xl p-6"}/>
        </div>

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