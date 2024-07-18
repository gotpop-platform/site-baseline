import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

interface ArticleItemProps {
  title: string
  blurb: string
  href: string
  style?: string
}

function ArticleItem({
  title,
  blurb,
  href,
  style,
}: ArticleItemProps): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  return (
    <article
      class={mkClass(import.meta.file)}
      style={style}
    >
      <style>{css}</style>
      <a class="link-header" href={href}>
        <h3>
          <span>{title}</span>
        </h3>
      </a>
      <p>{blurb}</p>
    </article>
  )
}

export default ArticleItem
