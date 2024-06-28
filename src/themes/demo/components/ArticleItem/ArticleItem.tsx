import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

function ArticleItem({
  title,
  content,
}: {
  title: string
  content: string
}): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  return (
    <article class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  )
}

export default ArticleItem
