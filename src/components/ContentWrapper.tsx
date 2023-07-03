import {ReactNode} from "react";

export default function ContentWrapper(props: {children: ReactNode}) {
  return (
    <main className="mt-16 px-8 lg:mb-16 sm:mb-8 mx-auto block lg:max-w-screen-lg xl:max-w-screen-lg max-w-full">
      {props.children}
    </main>
  )
}