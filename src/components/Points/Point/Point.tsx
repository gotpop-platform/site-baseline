import type { Article } from "../Points.data"
import { Icon } from "@components/Icon"
import jsxFactory from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export const Point = ({
  iconName,
  heading,
  text,
  style,
}: Article) => {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <article class="point" style={style}>
      <style>{css}</style>
      <Icon iconName={iconName} />
      <section class="content">
        <h3>{heading}</h3>
        <p>{text}</p>
      </section>
    </article>
  )
}
