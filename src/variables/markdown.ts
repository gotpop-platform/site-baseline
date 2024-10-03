import type { MarkdownFileProps, StyleObjProps } from "utils"

const style = {
  "--padding": "var(--spacing-md)",
  "--border-radius": "var(--radius-lg)",
}

export const stylesLayout = ({ metadata }: MarkdownFileProps): StyleObjProps[] => [
  {
    ...style,
    "--grid-column": "3 / span 16",
    "--grid-row": "2",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--grid-column": "21 / span 16",
    "--grid-row": "2",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--grid-column": "3 / span 10",
    "--grid-row": "4",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--grid-column": "15 / span 22",
    "--grid-row": "4",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--grid-column": "3 / span 22",
    "--grid-row": "6",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--grid-column": "27 / span 10",
    "--grid-row": "6",
    "--transition-article": metadata.id ?? "",
  },
]

export const layoutBlog = ({ metadata }: MarkdownFileProps): StyleObjProps[] => [
  {
    ...style,
    "--grid-column": "3 / span 13",
    "--grid-row": "2",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--grid-column": "18 / 37",
    "--grid-row": "2",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--grid-column": "3/ 37",
    "--grid-row": "4 / span 1",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--grid-column": "3/ 37",
    "--grid-row": "6 / span 1",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--grid-column": "span 6",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--grid-column": "span 12",
    "--transition-article": metadata.id ?? "",
  },
]
