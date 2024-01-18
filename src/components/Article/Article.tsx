import { h } from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type ArticleProps = { title: string; content: string }

export const Article = ({ title, content }: ArticleProps) => {
  const { css } = useCSS(import.meta)

  return (
    <article class-name="liam">
      <script src="./ArticleClient.ts" type="module"></script>
      <style>{css}</style>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  )
}
