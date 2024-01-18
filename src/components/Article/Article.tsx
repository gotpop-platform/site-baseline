import { h } from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type ArticleProps = { title: string; content: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

export const Article = ({ title, content }: ArticleProps) => {
  const { css } = useCSS({ meta: import.meta })
  const path = "src/components/Article/ArticleClient.js"

  return (
    <article class-name={useName}>
      <script src={path} type="module"></script>
      <style>{css}</style>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  )
}
