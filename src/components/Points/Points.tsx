import Icon from "@components/Icon"
import { articles } from "./Points.data"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"
import Point from "./Point/Point"

type PointsProps = {
  title?: string
  content?: string
  styleOverride?: string | null
}

const allArticles = articles.map((article) => (
  <Point {...article} />
))

const Points = ({
  title = "Points",
  content = "Points content",
  styleOverride = null,
}: PointsProps) => {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <section class={useName}>
      <style>{styleOverride ? styleOverride : css}</style>
      <div class="inner">
        <div class="intro">
          <Icon fill="0" iconName="4g_mobiledata" />
          <h2 class="title">{title}</h2>
          <p>{content}</p>
        </div>
        {allArticles}
      </div>
    </section>
  )
}

export default Points
