import projects from "../assets/projects.json"

export const getProject = (projectId: string) => {
  for (let project of projects) {
    if (project.id === projectId) {
      return project;
    }
  }
  throw Error('not found');
}

export const loader = ({params}: any) => {
  console.log(params)
  const project = getProject(String(params.projectId));
  return project
}
