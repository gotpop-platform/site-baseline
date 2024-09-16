import {
  jsxFactory,
  mkClass,
  styleNames,
  useCSS,
} from "utils"

type Metadata = {
  title: string
  blurb: string
  href: string
  style?: string
  slug: string
  description: string
}

type Layout = { [key: string]: string | number }

export interface ArticleItemProps {
  item: {
    metadata: Metadata
  }
  layout: Layout
}

export function ArticleItem({
  item,
  layout,
}: ArticleItemProps): JSX.Element {
  const {
    metadata: { title, description, slug, style },
  } = item
  const { css } = useCSS({ meta: import.meta })

  return (
    <article
      class={mkClass(import.meta.file)}
      style={styleNames(layout)}
    >
      <style>{css}</style>
      <a class="link-header" href={slug}>
        <h3>
          <span>{title}</span>
        </h3>
      </a>
      <p>{description}</p>
    </article>
  )
}
