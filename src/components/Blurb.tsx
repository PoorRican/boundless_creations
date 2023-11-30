import ReactMarkdown from "react-markdown";
import React from "react";

/**
 * Renders text as markdown.
 *
 * This component pulls the text from the `site_blurb.json` file.
 *
 * @param props - className to pass to parent element
 */
export const Blurb = (props: { className?: string, content: string }) => {
  return (
    <div className={props.className}>
      <ReactMarkdown
        components={{
          p: ({node, ...props}) => <p className="text-base mb-2 font-thin" {...props} />,
          // eslint-disable-next-line jsx-a11y/heading-has-content
          "h1": ({node, ...props}) => <h1 className="text-2xl mb-2 font-thin" {...props} />,
          a: ({node, ...props}) => <a className="font-bold text-cyan-500 hover:text-cyan-300 hover:underline" {...props} />,
        }}

      >{props.content}</ReactMarkdown>
    </div>
  )
}