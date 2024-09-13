import type { ArticleItem } from "../../data/articlesData"
import { ContentNav } from "../ContentNav"
import { Fragment } from "@components/Fragment"
import { jsxFactory } from "utils"
import { mkClass } from "@utils/mkClass"
import { pageContent } from "./ArticlePageContent"
import { useCSS } from "src/hooks/useCSS"

export function ArticlePage({
  section,
  style,
  slug,
}: ArticleItem & {
  style: string
  slug: string
}): JSX.Element {
  const { css } = useCSS({ meta: import.meta })
  const idSlug = "heading-" + slug + "-"

  return (
    <Fragment>
      <style>{css}</style>
      <ContentNav section={section} />
      <section
        class={mkClass(import.meta.file)}
        style={style}
      >
        {pageContent(section)}
      </section>
    </Fragment>
  )
}
