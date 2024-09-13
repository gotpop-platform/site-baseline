import { Brands } from "@components/Brands"
import { jsxFactory } from "utils"
import { useCSS } from "src/hooks/useCSS"

type HeroProps = { title: string; text: string }

const Hero = ({ title, text }: HeroProps) => {
  const { css, useName } = useCSS({ meta: import.meta })
  // const brandsItem = await Brands({
  //   title: "Brands",
  //   text: "Brands",
  // })

  const textSecondary =
    "It is a simple, fast, and light framework which does things."
  const the = "The"

  return (
    <section class={useName}>
      <style>{css}</style>
      <article class="hero-panel">
        <div class="intro">
          <section class="title-wrap">
            <h2 class="title">
              <em class="words word-first">{the + " "}</em>
              {title}
            </h2>
          </section>
          <aside class="text">
            <p>{text}</p>
            <p>{textSecondary}</p>
            <a href="#liam" class="link">
              Learn More
            </a>
          </aside>
        </div>
        <Brands />
      </article>
    </section>
  )
}

export default Hero
