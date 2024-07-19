import type { ArticleItem } from "../../data/articlesData"
import Fragment from "@components/Fragment"
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
    <Fragment>
      <aside>
        <nav>
          <ol>
            {section.map(({ title }, index) => (
              <li>
                <a href={"#" + idSlug + index}>{title}</a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>
      <article
        class={mkClass(import.meta.file)}
        style={style}
      >
        <style>{css}</style>
        {pageContent(section, idSlug)}
      </article>
    </Fragment>
  )
}
