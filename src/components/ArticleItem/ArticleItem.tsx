import {
  jsxFactory,
  mkClass,
  mkUrl,
  style,
  useCSS,
  type MarkdownFileProps,
  type StyleObjProps,
} from "utils"

type ArticleComponentProps = {
  markdownFile: MarkdownFileProps
  layout: StyleObjProps
}

export function ArticleItem({
  markdownFile,
  layout,
}: ArticleComponentProps): JSX.Element {
  const { css } = useCSS({ meta: import.meta })
  const {
    metadata: { title, description, slug },
  } = markdownFile

  return (
    <article
      className={mkClass(import.meta.file)}
      style={style(layout)}
    >
      <style>{css}</style>
      <a className="link-header" href={mkUrl(slug)}>
        <h3>
          <span>{title}</span>
        </h3>
      </a>
      <p>{description}</p>
    </article>
  )
}
