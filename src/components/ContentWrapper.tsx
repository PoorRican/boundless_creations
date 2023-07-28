import {ReactNode} from "react";

export default function ContentWrapper(props: {children: ReactNode}) {
  return (
    <main className="p-8 md:p-10 mx-auto block lg:max-w-screen-lg xl:max-w-screen-lg max-w-full">
      {props.children}
    </main>
  )
}