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

export default function ContactSection() {
  return (
    <section className="m-1 ring-1 p-6 mb-8 rounded-xl">
      <ul className="flex flex-col gap-4">
        {contact_links.map(({name, url, icon}) => {
          return (
            <li className=""
                key={name}
            >
              <a href={url} className="text-lg">
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