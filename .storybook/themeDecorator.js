import React from "react"
import { ManorGlobalStyles } from "../src/components/Global/manorGlobal.component";

function GlobalDecorator(storyFn) {
  return (
    <>
      <ManorGlobalStyles />
      {storyFn()}
    </>
  )
}

export default GlobalDecorator;
