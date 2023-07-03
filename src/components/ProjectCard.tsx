import Card from "./Card";

export enum Status {
    InProgress,
    AsIs,
    Active
}

const StatusBadge = (props: {status: Status}) => {
  const [style, text] = function() {
    switch (props.status) {
      case Status.InProgress:
        return ['bg-red-50 text-red-700 ring-red-600/10', 'In Progress']
      case Status.AsIs:
        return ['bg-orange-50 text-orange-700 ring-orange-600/10', 'As Is']
      case Status.Active:
        return ['bg-green-50 text-green-700 ring-green-600/10', 'Active']
    }
  }();
  return (
    <span className={`${style} mb-4 text-white items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset`}
          style={{fontWeight: 100}}
          children={text}
    />
  )
}

export interface ProjectIface {
    title: string;
    description: string;
    status: Status;
    url?: string;
    key?: number;
}

export const ProjectCard = (props: ProjectIface) => {
    return (
      <a href={props.url ? props.url : "#"}>
        <Card className="h-40 bg-slate-100 hover:bg-white" >

          <h3 className="text-xl text-slate-900 mr-2.5">
            {props.title}
          </h3>

          <StatusBadge status={props.status} />

          <p className="mt-2 overflow-ellipsis text-sm text-slate-800" style={{fontWeight: 200}}
             children={props.description} />
        </Card>
      </a>
    )
}