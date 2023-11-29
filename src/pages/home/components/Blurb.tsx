import ReactMarkdown from "react-markdown";
import site_blurb from "./site_blurb.json";
import React from "react";

/**
 * This is the short blurb that appears on the home page.
 *
 * This component pulls the text from the `site_blurb.json` file.
 *
 * @param props - className to pass to parent element
 */
export const Blurb = (props: { className?: string }) => {
  return (
    <div className={props.className}>
      <ReactMarkdown
        components={{
          p: ({node, ...props}) => <p className="text-base mb-2 font-thin" {...props} />,
          // eslint-disable-next-line jsx-a11y/heading-has-content
          "h1": ({node, ...props}) => <h1 className="text-2xl mb-2 font-thin" {...props} />
        }}

      >{site_blurb}</ReactMarkdown>
    </div>
  )
}