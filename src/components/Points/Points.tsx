import Icon from "@components/Icon"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type PointsProps = { title?: string; content?: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Points = async ({
  title = "Points",
  content = "Points content",
}: PointsProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <section class={useName}>
      <style>{css}</style>
      <div class="inner">
        <div class="intro">
          <Icon iconName="child_care" />
          <h2>About us</h2>
          <p>
            SingleMum is a single dependency framework for
            building web applications. It is a simple, fast,
            and light framework. It is designed for
            developers who want to build web applications
            with a single dependency.
          </p>
        </div>
        <article>
          <Icon iconName="child_care" />
          <h3>Lorem ipsum dolor</h3>
          <p>
            Sit amet consectetur adipisicing elit. Earum
            corporis tempora dolor maiores aliquid accusamus
            est illum maxime, perferendis incidunt molestiae
            cumque ea, cum et sit ex, veritatis expedita
            repellendus.
          </p>
        </article>
        <article>
          <Icon iconName="child_care" />
          <h3>Lorem ipsum dolor</h3>
          <p>
            Sit amet consectetur adipisicing elit. Earum
            corporis tempora dolor maiores aliquid accusamus
            est illum maxime, perferendis incidunt molestiae
            cumque ea, cum et sit ex, veritatis expedita
            repellendus.
          </p>
        </article>
        <article>
          <Icon iconName="child_care" />
          <h3>Lorem ipsum dolor</h3>
          <p>
            Sit amet consectetur adipisicing elit. Earum
            corporis tempora dolor maiores aliquid accusamus
            est illum maxime, perferendis incidunt molestiae
            cumque ea, cum et sit ex, veritatis expedita
            repellendus.
          </p>
        </article>
        <article>
          <Icon iconName="child_care" />
          <h3>Lorem ipsum dolor</h3>
          <p>
            Sit amet consectetur adipisicing elit. Earum
            corporis tempora dolor maiores aliquid accusamus
            est illum maxime, perferendis incidunt molestiae
            cumque ea, cum et sit ex, veritatis expedita
            repellendus.
          </p>
        </article>
        <article>
          <Icon iconName="child_care" />
          <h3>Lorem ipsum dolor</h3>
          <p>
            Sit amet consectetur adipisicing elit. Earum
            corporis tempora dolor maiores aliquid accusamus
            est illum maxime, perferendis incidunt molestiae
            cumque ea, cum et sit ex, veritatis expedita
            repellendus.
          </p>
        </article>
        <article>
          <Icon iconName="child_care" />
          <h3>Lorem ipsum dolor</h3>
          <p>
            Sit amet consectetur adipisicing elit. Earum
            corporis tempora dolor maiores aliquid accusamus
            est illum maxime, perferendis incidunt molestiae
            cumque ea, cum et sit ex, veritatis expedita
            repellendus.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Points
