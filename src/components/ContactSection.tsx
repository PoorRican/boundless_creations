import {ReactNode} from "react";
import profile_pic from "../assets/serious portait profile pic.jpg";
import contact_links from "../assets/links.json"

interface Site {
  name: string;
  url: string;
  icon?: ReactNode;
}

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
  const upwork_direct_contract = 'https://www.upwork.com/workwith/josuefigueroa'
  return (
    <section className={`${props.className} hover:bg-slate-900`}>
      <div className="inline-flex flex-row w-fit gap-4">
        <ProfilePic className="inline h-28"/>
        <div className="flex flex-col">

          <div>
            <span className="border-slate-700 border-b border-dashed text-md pb-1 pr-1 font-thin">
              Catch me online:
            </span>
            <ul className="flex flex-row flex-wrap gap-2 mt-4">
              {contact_links.map(({name, url, icon}) => <ContactLink name={name} url={url} key={url} icon={icon}/>)}
            </ul>
          </div>

          <div className={"mt-4"}>
            <a href={upwork_direct_contract} className={"border-slate-700 border-b border-dashed"}>
              <span className="text-md pb-1 pr-1 font-thin">
                Or hire me on
              </span>
              <span className={"text-green-500 border-green-900 border-b border-dashed"}>
                Upwork
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}