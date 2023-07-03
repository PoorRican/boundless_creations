export enum Status {
  InProgress,
  AsIs,
  Active
}

export const StatusBadge = (props: { status: Status, className?: string }) => {
  const [style, text] = function () {
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
    <span className={`${style} ${props.className} mb-4 text-white items-center rounded-md
    px-2 py-1 font-thin ring-1 ring-inset`}
          children={text}
    />
  )
}