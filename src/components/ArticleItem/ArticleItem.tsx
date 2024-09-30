import {
  jsxFactory,
  mkClass,
  mkUrl,
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
  const { css } = useCSS({
    meta: import.meta,
    styles: layout,
  })
  const {
    metadata: { title, description, slug },
  } = markdownFile

  return (
    <article class={mkClass(import.meta.file)}>
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
