import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type ArticleProps = { title: string; content: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Article = ({ title, content }: ArticleProps) => {
  const { css } = useCSS({ meta: import.meta })
  const path = "/assets/js/Article.client.js"

  return (
    <article class={useName}>
      <script src={path} type="module"></script>
      <style>{css}</style>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  )
}

export default Article
