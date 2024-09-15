import {
  jsxFactory,
  mkClass,
  mkUrl,
  styleNames as style,
  type MarkdownFile,
} from "utils"

import { useCSS } from "utils"

interface ArticleItemProps {
  title: string
  blurb: string
  href: string
  style?: string
}

export function ArticleItem({
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

export const ListArticles = ({
  parsedFiles,
}: {
  parsedFiles: MarkdownFile[]
}): JSX.Element => {
  const listArticles = parsedFiles.map(
    (
      { metadata: { title, slug, description } },
      i
    ): JSX.IntrinsicElements["article"] => {
      const relative = `articles/${slug}`

      const stylesContent = {
        "--transition-article": slug,
      }

      return (
        <ArticleItem
          title={title}
          blurb={description}
          href={mkUrl(relative)}
          style={style(stylesContent)}
        />
      )
    }
  )
  return listArticles
}
