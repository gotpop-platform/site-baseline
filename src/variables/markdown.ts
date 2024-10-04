import type { MarkdownFileProps, StyleObjProps } from "utils"

const style = {
  "--padding": "var(--spacing-md)",
}

export const stylesLayout = ({ metadata }: MarkdownFileProps): StyleObjProps[] => [
  {
    ...style,
    "--background-colour": "var(--grey-200)",
    "--border-radius": "var(--radius-lg) 0 0 0",
    "--grid-column": "3 / span 17",
    "--grid-row": "4",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-300)",
    "--border-radius": "0 var(--radius-lg) 0 0",
    "--grid-column": "20 / span 17",
    "--grid-row": "4",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-300)",
    "--border-radius": "0",
    "--grid-column": "3 / span 11",
    "--grid-row": "5",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-200)",
    "--border-radius": "0",
    "--grid-column": "14 / span 23",
    "--grid-row": "5",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-200)",
    "--border-radius": "0 0 0 var(--radius-lg) ",
    "--grid-column": "3 / span 23",
    "--grid-row": "6",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-300)",
    "--border-radius": "0 0 var(--radius-lg) 0",
    "--grid-column": "26 / span 11",
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
