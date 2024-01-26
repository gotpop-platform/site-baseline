import Header from "@components/Header"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type HeroProps = { title: string; text: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Hero = async ({ title, text }: HeroProps) => {
  const { css } = useCSS({ meta: import.meta })
  const headerItem = await Header()

  return (
    <section class={useName}>
      <style>{css}</style>
      {headerItem}
      {/* <article>
        <h1>{title}</h1>
        <p>{text}</p>
      </article> */}
      <div class="container">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </section>
  )
}

export default Hero
