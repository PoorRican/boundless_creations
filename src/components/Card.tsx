import {ReactNode} from "react";

export default function Card(props: {className: string, children: ReactNode[] }) {
  return (
    <article className={`p-5 rounded-md ${props.className}`}>
      {props.children}
    </article>
  )
}