import React from "react";

/**
 * Interests section for the home page.
 *
 * This component is a bordered box that contains a list of my interests.
 *
 * @param props - className to pass to parent element
 */
export const InterestsSection = (props: { className?: string }) => {
  const interests = [
    "AI Agents",
    "Machine Learning",
    "Science Fiction",
    "Python",
    "Rust",
    "Synthetic biology",
    "Biohacking",
    "Jesus",
    "BJJ",
    "InfoSec",
    "Digital Art"
  ];
  return (
    <div className={props.className}>
      <h3 className={"text-xl font-light mb-8"}><span
        className={"border-b border-dashed border-slate-500 pr-2 pb-1"}>Interests</span></h3>
      <ul className={"flex flex-row gap-8 flex-wrap"}>
        {interests.map((interest) => <li className={"min-w-fit font-thin border-b border-dashed border-slate-700 pb-1"}
                                         key={interest}>{interest}</li>)}
      </ul>
    </div>
  )
}