import Card from "./Card";
import {Status, StatusBadge} from "./StatusBadge";
import {Link} from "react-router-dom";

export interface ProjectLinkIface {
  name: string;
  url: string;
}

export interface ProjectIface {
  id: string,
  title: string;
  summary: string;
  description?: string;
  status: Status;
  photo?: string;
  links?: ProjectLinkIface[];
}

export const ProjectCard = (props: ProjectIface) => {
    return (
      <Link to={`/project/${props.id}`}>
        <Card className="h-full bg-slate-100 hover:bg-white" >

          <img src={`/project_images/${props.photo}`} alt={"abstract representation of project"}
               className={"h-32 md:h-40 w-5/6 mx-auto md:w-full object-cover mb-4 md:mb-2 rounded-lg -mt-10 ring-1 ring-white ring-opacity-50"}/>

          <h3 className="text-xl text-slate-900 mr-2.5">
            {props.title}
          </h3>

          <StatusBadge status={props.status} className={"text-xs"} />

          <p className={"mt-2 overflow-ellipsis text-sm text-slate-800 font-thin"}
             children={props.summary} />
        </Card>
      </Link>
    )
}