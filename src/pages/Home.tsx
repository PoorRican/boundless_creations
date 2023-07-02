import ContactSection from "../components/ContactSection";
import projects from "../assets/projects.json";
import {Project} from "../components/Project";
import Main from "../components/ContentWrapper";

const about_me: string = `
This is a section about me
`;

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
          <div className="mt-4">
            {about_me}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-thin ml-2">
            Recent Projects:
          </h2>
          <ul>
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