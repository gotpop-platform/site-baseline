import type { ArticleItem } from "../../data/articlesData"
import Fragment from "@components/Fragment"
import { Heading } from "@components/Heading"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

function ArticlePage({
  section,
  style,
}: ArticleItem & { style: string }): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  const pageContent = section.map(
    ({ title, content }, index) => {
      const level = index === 0 ? 1 : 2

      return (
        <Fragment>
          {
            <Heading level={level} index={index}>
              {title}
            </Heading>
          }
          {content.map((p) => (
            <p>{p}</p>
          ))}
        </Fragment>
      )
    }
  )

  return (
    <article
      class={mkClass(import.meta.file)}
      style={style}
    >
      <style>{css}</style>
      {pageContent}
    </article>
  )
}

export default ArticlePage
