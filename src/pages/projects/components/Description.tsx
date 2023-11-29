import ReactMarkdown from "react-markdown";
import React from "react";

/**
 * Component for rendering the project description.
 *
 * This component uses the `react-markdown` library to render the description as markdown.
 *
 * @param props - markdown formatted description
 */
export const Description = (props: { description: string }) => {
  if (props.description) {
    return (
      <div className={"mt-2"}>
        <h2 className={"text-lg mb-2 font-light"}>
          Description
        </h2>
        <ReactMarkdown className={"font-thin"}
                       components={{
                         p: ({node, ...props}) => <p className="text-base my-1 font-thin" {...props} />,
                         // eslint-disable-next-line jsx-a11y/heading-has-content
                         "h1": ({node, ...props}) => <h1 className="text-2xl my-2 font-thin" {...props} />,
                         // eslint-disable-next-line jsx-a11y/heading-has-content
                         "h2": ({node, ...props}) => <h2 className="text-xl my-2 font-thin" {...props} />,
                         // eslint-disable-next-line jsx-a11y/heading-has-content
                         "h3": ({node, ...props}) => <h3 className="text-lg my-2 font-light" {...props} />,
                       }}
        >
          {props.description}
        </ReactMarkdown>
      </div>
    )
  } else {
    return <></>
  }
}