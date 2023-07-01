import {Project, Status} from "../components/Project";
import projects from "../data/projects.json"


const Projects = () => {
    let counter = 0;
    return (
        <main className="px-8 lg:mb-16 sm:mb-8 mx-auto block md:max-w-4xl sm:max-w-full">
            <h1 className="mt-16 mb-8 text-2xl">Projects</h1>
            <section className="grid grid-cols-2 gap-4">
                {projects.map((project) => {
                    return (
                        <Project
                            title={project.title}
                            description={project.description}
                            status={project.status}
                            key={counter++}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default Projects;