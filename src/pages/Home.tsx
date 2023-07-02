import ContactSection from "../components/ContactSection";
import projects from "../assets/projects.json";
import {Project} from "../components/Project";

const Home = () => {
  return (
    <main className="px-8 lg:mb-16 sm:mb-8 mx-auto block md:max-w-4xl sm:max-w-full">

      <h1 className="mt-16 mb-8 text-4xl" style={{fontWeight: 100}}>
        <span className="border-b border-slate-600 pr-4 pb-2">
          Josué Figueroa
        </span>
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="mt-1">
          <ContactSection className="ring-1 h-40 p-6 rounded-xl" />
          <div className="mt-4">
            This is a section about me
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

    </main>
  )
}

export default Home;