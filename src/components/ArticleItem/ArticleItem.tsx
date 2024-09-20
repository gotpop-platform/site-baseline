import {
  jsxFactory,
  mkClass,
  style,
  useCSS,
  type ArticleComponentProps,
  type StyleObjProps
} from "utils";

export function ArticleItem({
  markdownFile,
  layout,
}: ArticleComponentProps): JSX.Element {
  const {
    metadata: { title, description, slug },
  } = markdownFile
  const { css } = useCSS({ meta: import.meta })
  console.log('layout :', layout);

  return (
    <article
      className={mkClass(import.meta.file)}
      style={style(layout as StyleObjProps)}
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
