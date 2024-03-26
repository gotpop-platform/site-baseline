import Header from "@components/Header"
import Icon from "@components/Icon"
import PopOverImage from "@components/PopOverImage"
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

  const popOverImageItem = await PopOverImage({
    title: "Nice image",
    text: "Nice image",
  })

  return (
    <section class={useName}>
      <style>{css}</style>
      {headerItem}
      <div class="container">
        <article>
          <h1>{title}</h1>
          <p>{text}</p>
          <a href="#liam">Learn More</a>

          <Icon iconName="home" />
          <Icon iconName="shield_lock" />
          <Icon iconName="14mp" />
        </article>
      </div>
    </section>
  )
}

export default Hero
