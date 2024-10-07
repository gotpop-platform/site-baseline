import { type StyleObjProps } from "utils"

import { mkClass, mkUrl, useCSS } from "@gotpop-platform/package-utilities"

import { type MarkdownFileProps } from "@gotpop-platform/package-markdown"

import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

type ArticleComponentProps = {
  markdownFile: MarkdownFileProps
  layout: StyleObjProps
}

export function ArticleItem({ markdownFile, layout }: ArticleComponentProps): JSX.Element {
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
