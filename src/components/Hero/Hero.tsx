import Brands from "@components/Brands"
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
  const brandsItem = await Brands({
    title: "Brands",
    text: "Brands",
  })

  const popOverImageItem = await PopOverImage({
    title: "Nice image",
    text: "Nice image",
  })

  return (
    <section class={useName}>
      <style>{css}</style>
      {/* {headerItem} */}
      <div class="hero-inner">
        <div class="inner-intro">
          <h2>{title}</h2>
          <p>{text}</p>
          <a href="#liam" class="link-button">
            Learn More
          </a>
        </div>
        <div class="inner-actions">
          <a href="#liam" class="action">
            <span>
              <Icon iconName="fast_forward" />
            </span>
            <span>Fast</span>
          </a>
          <a href="#liam" class="action">
            <span>
              <Icon iconName="bedroom_child" />
            </span>
            <span>Light</span>
          </a>
          <a href="#liam" class="action">
            <span>
              <Icon iconName="healing" />
            </span>
            <span>Simple</span>
          </a>
        </div>
      </div>
      {brandsItem}
    </section>
  )
}

export default Hero
