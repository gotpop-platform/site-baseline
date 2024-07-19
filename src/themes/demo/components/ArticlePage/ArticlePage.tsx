import type { ArticleItem } from "../../data/articlesData"
import h from "@utils/jsxFactory"
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
    <article
      class={mkClass(import.meta.file)}
      style={style}
    >
      <style>{css}</style>
      <aside>
        <h4>Table of contents</h4>

        <nav>
          <ul>
            {section.map(({ title }, index) => (
              <li>
                <a href={"#" + idSlug + index}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {pageContent(section, idSlug)}
    </article>
  )
}
