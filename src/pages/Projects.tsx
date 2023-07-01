import {Project, Status} from "../components/Project";

const projects = [
    {
        title: "Test Title",
        description: "Testing lorem ipsum",
        status: Status.InProgress,
    },
    {
        title: "Test Title",
        description: "",
        status: Status.Active,
    },
    {
        title: "Test Title",
        description: "",
        status: Status.AsIs,
    },
    {
        title: "Test Title",
        description: "",
        status: Status.InProgress,
    },
];

const Projects = () => {
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
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default Projects;