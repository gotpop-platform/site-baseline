import type { ArticleItem } from "../../data/articlesData"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { pageContent } from "./ArticlePageContent"
import { useCSS } from "src/hooks/useCSS"

export function ArticlePage({
  section,
  style,
}: ArticleItem & { style: string }): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  return (
    <article
      class={mkClass(import.meta.file)}
      style={style}
    >
      <style>{css}</style>
      {pageContent(section)}
    </article>
  )
}
