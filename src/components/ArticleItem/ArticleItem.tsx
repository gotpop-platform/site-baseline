import {
  jsxFactory,
  mkClass,
  styleNames,
  useCSS,
  type ArticleItemProps,
} from "utils"

export function ArticleItem({
  item,
  layout,
}: ArticleItemProps): JSX.Element {
  const {
    metadata: { title, description, slug },
  } = item
  const { css } = useCSS({ meta: import.meta })

  return (
    <article
      className={mkClass(import.meta.file)}
      style={styleNames(layout)}
    >
      <style>{css}</style>
      <a className="link-header" href={slug}>
        <h3>
          <span>{title}</span>
        </h3>
      </a>
      <p>{description}</p>
    </article>
  )
}
