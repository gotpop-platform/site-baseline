import { articlesData } from "@data/articlesData"
import { jsxFactory } from "utils"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

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

export const ArticleItems = () =>
  Array.from(articlesData.entries()).map(
    ([key, article], i) => (
      <ArticleItem
        {...article}
        style={"--transition-article: article-" + (i + 1)}
      />
    )
  )
