import sensd from "./assets/projects/sensd.png";
import tradr from "./assets/projects/tradr.png";
import ncbi from "./assets/projects/ncbi.png";
import sbol from "./assets/projects/sbol.png";
import market_services from "./assets/projects/market_services.png";
import react_bioseq from "./assets/projects/react-biosequence.png";
import {ProjectIface} from "./components/ProjectCard";

/**
 * Wrapper that manually adds project photos to project.
 *
 * This is a temporary hack to avoid configuring webpack.
 **/
export const add_project_images = (projects: ProjectIface[]): ProjectIface[] => {
  const photos = new Map([
    ["sensd", sensd],
    ["tradr", tradr],
    ["ncbi-rs", ncbi],
    ["sbol-rs", sbol],
    ["market_services", market_services],
    ["react-biosequence", react_bioseq]
  ]);
  const e =  projects.map((project: ProjectIface) => {
    if (photos.has(project.id)) {
      return {...project, photo: photos.get(project.id)}
    }
    return project
  });
  return e;
}
