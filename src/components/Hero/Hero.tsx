import Header from "@components/Header"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type HeroProps = { title: string; text: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Hero = ({ title, text }: HeroProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <section class={useName}>
      <style>{css}</style>
      <Header />
      <article>
        <h1>{title}</h1>
        <p>{text}</p>
      </article>
    </section>
  )
}

export default Hero
