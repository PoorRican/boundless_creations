export enum Status {
    InProgress,
    AsIs,
    Active
}

interface ProjectIface {
    title: string;
    description: string,
    status: Status,
}

export const Project = (props: ProjectIface) => {
    return (
        <article className="m-4 h-40 bg-slate-900 ring-2 p-5 rounded-2xl">
            <h1 className="text-xl">
                {props.title}

            </h1>

            <span className="px-1 py-0.5 ml-2.5 text-xs rounded"
                  style={{backgroundColor: "red"}}
                  children={props.status}
            />

            <p className="mt-2 overflow-ellipsis"
               children={props.description} />
        </article>
    )
}