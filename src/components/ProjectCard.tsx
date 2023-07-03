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
  links?: ProjectLinkIface[];
}

export const ProjectCard = (props: ProjectIface) => {
    return (
      <Link to={`/project/${props.id}`}>
        <Card className="h-40 bg-slate-100 hover:bg-white" >

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