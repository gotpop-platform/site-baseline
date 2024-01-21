import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"
import { sillyMan } from "./Article.client.js"

type ArticleProps = { title: string; content: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Article = ({ title, content }: ArticleProps) => {
  const { css } = useCSS({ meta: import.meta })
  const path = "/public/Article.client.js"
  sillyMan()

  return (
    <article class={useName}>
      <script src={path}></script>
      <style>{css}</style>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  )
}

export default Article
