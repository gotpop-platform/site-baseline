import {
  Banner,
  Intro,
  Mission,
  OurStory,
  OurStory2,
  Vision,
} from "./Blog.text"
import { introParagraph, introTitle } from "./Blog.data"

import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type BlogProps = { title?: string; children?: string }

const Blog = ({ title, children }: BlogProps) => {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <main class={useName}>
      <style>{css}</style>
      <Intro title={introTitle} text={introParagraph} />
      <OurStory title="Our story" text="Our story" />
      <Banner title={""} text={""} />
      <OurStory2 title="Our story" text="Our story" />
      <Mission title="Our story" text="Our story" />
      <Vision title="Our story" text="Our story" />
    </main>
  )
}

export default Blog
