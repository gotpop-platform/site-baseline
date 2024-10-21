import { surfaceStyles } from "./base"
import type { MarkdownFileProps, StyleObjProps } from "@gotpop-platform/package-markdown"

const style = {
  "--padding": "var(--spacing-md)",
}

export const stylesBlog = {
  "--background-colour": "var(--transparent)",
  // "--border-radius": "var(--radius-sm)",
  "--grid-column": "var(--grid-column-centre)",
  "--grid-row": "main",
  // "--grid-template-rows": "1rem 1fr 1rem",
}

export const stylesBlogInner = (id: string) => ({
  "--background-colour": "var(--slate-100)",
  "--padding": "var(--spacing-xl)",
  "--grid-column": "var(--grid-column-centre)",
  "--grid-row": "1",
  "--display": "block",
  "--border-radius": "var(--radius-sm)",
  "--transition-article": id,
})

export const stylesBlogSurfaceMain = {
  ...surfaceStyles,
  "--grid-template-rows": "min-content  min-content  min-content",
  "--background-colour": "var(--transparent)",
  "--grid-row": "main",
}

export const layoutBlog = ({ metadata }: MarkdownFileProps): StyleObjProps[] => [
  {
    ...style,
    "--background-colour": "var(--grey-100)",
    "--border-radius": "var(--radius-lg) 0 0 0",
    "--grid-column": "1 / span 16",
    "--grid-row": "1",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-200)",
    "--border-radius": "0 var(--radius-lg) 0 0",
    "--grid-column": "17 / -1",
    "--grid-row": "1",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-300)",
    "--border-radius": "0",
    "--grid-column": "1 / -1",
    "--grid-row": "2",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-400)",
    "--border-radius": "0 0 var(--radius-lg) var(--radius-lg)",
    "--grid-column": "1 / -15",
    "--grid-row": "3",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-500)",
    "--grid-column": "span 14",
    "--grid-row": "3",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-600)",
    "--grid-column": "span 12",
    "--grid-row": "3",
    "--transition-article": metadata.id ?? "",
  },
]
