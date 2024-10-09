import type { MarkdownFileProps, StyleObjProps } from "@gotpop-platform/package-markdown"

const style = {
  "--padding": "var(--spacing-md)",
}

export const stylesLayout = ({ metadata }: MarkdownFileProps): StyleObjProps[] => [
  {
    ...style,
    "--background-colour": "oklch(0.9 0 0 / 0.6)",
    "--border-radius": "var(--radius-lg) 0 0 0",
    "--grid-column": "1 / span 18",
    "--grid-row": "3",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "oklch(0.96 0 0 / 0.6)",
    "--border-radius": "0 var(--radius-lg) 0 0",
    "--grid-column": "21 / -1",
    "--grid-row": "3",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "oklch(0.93 0 0 / 0.6)",
    "--border-radius": "0",
    "--grid-column": "1 / span 15",
    "--grid-row": "5",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "oklch(0.91 0 0 / 0.6)",
    "--border-radius": "0",
    "--grid-column": "18 / -1",
    "--grid-row": "5",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "oklch(0.92 0 0 / 0.6)",
    "--border-radius": "0 0 0 var(--radius-lg) ",
    "--grid-column": "1 / span 21",
    "--grid-row": "9",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "oklch(0.95 0 0 / 0.6)",
    "--border-radius": "0 0 var(--radius-lg) 0",
    "--grid-column": "24 / -1",
    "--grid-row": "9",
    "--transition-article": metadata.id ?? "",
  },
]

export const stylesArticlesLayout = ({ metadata }: MarkdownFileProps): StyleObjProps[] => [
  {
    ...style,
    "--background-colour": "var(--grey-100)",
    "--border-radius": "var(--radius-lg) 0 0 0",
    "--grid-column": "1 / span 15",
    "--grid-row": "1",
    "--transition-article": metadata.id ?? "",
  },
  {
    ...style,
    "--background-colour": "var(--grey-200)",
    "--border-radius": "0 var(--radius-lg) 0 0",
    "--grid-column": "18 / -1",
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
