import Card from "./Card";
import {Status, StatusBadge} from "./StatusBadge";

export interface ProjectIface {
  id: string,
  title: string;
  description: string;
  status: Status;
  url?: string;
}

export const ProjectCard = (props: ProjectIface) => {
    return (
      <a href={props.url ? props.url : "#"}>
        <Card className="h-40 bg-slate-100 hover:bg-white" >

          <h3 className="text-xl text-slate-900 mr-2.5">
            {props.title}
          </h3>

          <StatusBadge status={props.status} />

          <p className={"mt-2 overflow-ellipsis text-sm text-slate-800 font-thin"}
             children={props.description} />
        </Card>
      </a>
    )
}