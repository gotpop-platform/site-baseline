import { h } from "@utils/jsxFactory"

interface MainProps {
  children?: any
  el: string
}

const title = "My Title"

const Main = ({ children }: MainProps) => {
  return (
    <main class="main">
      <section class="section">
        <article class="article">{children}</article>
      </section>
    </main>
  )
}

export default Main
