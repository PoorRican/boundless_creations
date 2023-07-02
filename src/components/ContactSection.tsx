import {ReactNode} from "react";
import profile_pic from "../assets/serious portait profile pic.jpg";

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
  },
  {
    name: 'Discord',
    url: ''
  }
];

const ProfilePic = (props: { className: string }) => {
  return (
    <img src={profile_pic}
         alt="A dashing young bald man"
         className={props.className + " rounded-full"}
    />
  )
}

const ContactLink = (props: Site) => {
  const icon = props.icon ? props.icon : '';
  return (
    <a href={props.url} className="">
      <li className="inline bg-slate-800 border-2 border-slate-700 rounded px-3 pb-1">
        <span>{icon}</span>

        <span className="text-xs">
          {props.name}
        </span>
      </li>
    </a>
  )
}

export default function ContactSection(props: { className: string }) {
  return (
    <section className={props.className}>
      <div className="inline-flex flex-row w-fit h-fit gap-4">
        <ProfilePic className="inline h-28"/>
        <div className="">
          <span className="border-slate-700 border-b border-dashed text-md pb-1 pr-1 font-thin">
            Catch me online:
          </span>
          <ul className="flex flex-row flex-wrap gap-2 mt-4">
            {contact_links.map(({name, url, icon}) => <ContactLink name={name} url={url} key={url} icon={icon}/>)}
          </ul>
        </div>
      </div>
    </section>
  )
}