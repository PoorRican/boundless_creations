import sensd from "./assets/projects/sensd.png";
import tradr from "./assets/projects/tradr.png";
import ncbi from "./assets/projects/ncbi.png";
import sbol from "./assets/projects/sbol.png";
import market_services from "./assets/projects/market_services.png";
import react_bioseq from "./assets/projects/react-biosequence.png";
import {ProjectIface} from "./components/ProjectCard";

/**
 * Wrapper that manually adds project photo URLs to project object.
 *
 * This is a temporary hack to avoid configuring webpack.
 *
 * @param projects - list of projects to return. Photo URLs are added to each project.
 *
 * @returns - list of projects with photo URLs added
 **/
export const add_project_images = (projects: ProjectIface[]): ProjectIface[] => {
  // this is a mapping of existing project IDs to photo URLs
  const photos = new Map([
    ["sensd", sensd],
    ["tradr", tradr],
    ["ncbi-rs", ncbi],
    ["sbol-rs", sbol],
    ["market_services", market_services],
    ["react-biosequence", react_bioseq]
  ]);
  // if project has a photo, add it to the project object
  const e =  projects.map((project: ProjectIface) => {
    if (photos.has(project.id)) {
      return {...project, photo: photos.get(project.id)}
    }
    return project
  });
  return e;
}
