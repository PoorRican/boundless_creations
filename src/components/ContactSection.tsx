import {ReactNode} from "react";

interface Site {
  name: string;
  url: string;
  icon?: ReactNode;
}
const contact_links: Site[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/Poor__Rican'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/PoorRican'
  }
];

export default function ContactSection(props: {className: string}) {
  return (
    <section className={props.className}>
      <h3 className="mb-4">
        <span className="border-slate-700 border-b border-dashed text-lg pb-2 pr-2">
          Catch me online
        </span>
      </h3>
      <ul className="flex flex-row gap-4">
        {contact_links.map(({name, url, icon}) => {
          return (
            <li className="border-b-2 border-dashed border-slate-800 rounded-xl px-4 py-1"
                key={name}
            >
              <a href={url} className="text-md">
                <span>{icon ? icon : ''}</span>

                <span>{name}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}