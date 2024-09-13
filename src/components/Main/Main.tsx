import { jsxFactory } from "utils"

interface MainProps {
  children?: any
}

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
