import type { ArticleItem } from "../../data/articlesData"
import Fragment from "@components/Fragment"
import { Heading } from "@components/Heading"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

function ArticlePage({
  title,
  section,
  style,
}: ArticleItem & { style: string }): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  const pageContent = section.map(
    ({ title, content }, index) => {
      const paragraphs = content.map((paragraph) => (
        <p>{paragraph}</p>
      ))

      return (
        <Fragment>
          {
            <Heading
              level={index === 0 ? 1 : 2}
              index={index}
            >
              {title}
            </Heading>
          }
          {paragraphs}
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
      {/* <Icon
        type={IconTypes.outlined}
        iconName="add_circle_outline"
      /> */}
      {pageContent}
    </article>
  )
}

export default ArticlePage
