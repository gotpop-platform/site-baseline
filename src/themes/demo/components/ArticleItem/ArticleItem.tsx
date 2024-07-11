import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

interface ArticleItemProps extends Record<string, any> {
  title: string
  content: string
  href: string
}

function ArticleItem({
  title,
  content,
  href,
  ...rest
}: ArticleItemProps): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  return (
    <article
      className={mkClass(import.meta.file)}
      {...rest}
    >
      <style>{css}</style>
      <a href={href}>
        <h3>{title}</h3>
      </a>
      <p>{content}</p>
    </article>
  )
}

export default ArticleItem
