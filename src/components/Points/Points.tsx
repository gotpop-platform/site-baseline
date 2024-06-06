import Icon from "@components/Icon"
import { articles } from "./Points.data"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type PointsProps = { title?: string; content?: string }

const Points = ({
  title = "Points",
  content = "Points content",
}: PointsProps) => {
  const { css, useName } = useCSS({ meta: import.meta })

  const allArticles = articles.map((article, index) => (
    <article key={index}>
      <Icon iconName={article.iconName} />
      <h3>{article.heading}</h3>
      <p>{article.text}</p>
    </article>
  ))

  return (
    <section class={useName}>
      <style>{css}</style>
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
