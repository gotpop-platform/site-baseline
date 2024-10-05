import type { MarkdownFileProps, StyleObjProps } from "@gotpop-platform/utils"

const style = {
  "--padding": "var(--spacing-md)",
}

export const stylesLayout = ({ metadata }: MarkdownFileProps): StyleObjProps[] => [
  {
    ...style,
    "--background-colour": "var(--grey-100)",
    "--border-radius": "var(--radius-lg) 0 0 0",
    "--grid-column": "1 / span 19",
    "--grid-row": "4",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-200)",
    "--border-radius": "0 var(--radius-lg) 0 0",
    "--grid-column": "20 / -1",
    "--grid-row": "4",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-300)",
    "--border-radius": "0",
    "--grid-column": "1 / span 13",
    "--grid-row": "5",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-400)",
    "--border-radius": "0",
    "--grid-column": "14 / -1",
    "--grid-row": "5",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-500)",
    "--border-radius": "0 0 0 var(--radius-lg) ",
    "--grid-column": "1 / span 25",
    "--grid-row": "6",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-600)",
    "--border-radius": "0 0 var(--radius-lg) 0",
    "--grid-column": "26 / -1",
    "--grid-row": "6",
    "--transition-article": metadata.id ?? "",
  },
]

export const stylesArticlesLayout = ({ metadata }: MarkdownFileProps): StyleObjProps[] => [
  {
    ...style,
    "--background-colour": "var(--grey-100)",
    "--border-radius": "var(--radius-lg) 0 0 0",
    "--grid-column": "1 / span 19",
    "--grid-row": "1",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-200)",
    "--border-radius": "0 var(--radius-lg) 0 0",
    "--grid-column": "20 / -1",
    "--grid-row": "1",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-300)",
    "--border-radius": "0",
    "--grid-column": "1 / span 13",
    "--grid-row": "2",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-400)",
    "--border-radius": "0",
    "--grid-column": "14 / -1",
    "--grid-row": "2",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-500)",
    "--border-radius": "0 0 0 var(--radius-lg) ",
    "--grid-column": "1 / span 25",
    "--grid-row": "3",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-300)",
    "--border-radius": "0 0 var(--radius-lg) 0",
    "--grid-column": "26 / -1",
    "--grid-row": "3",
    "--transition-article": metadata.id ?? "",
  },
]

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
    "--grid-column": "1 / -1",
    "--grid-row": "3",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-500)",
    "--grid-column": "span 6",
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
