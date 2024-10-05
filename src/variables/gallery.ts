import type { MarkdownFileProps, StyleObjProps } from "@gotpop-platform/utils"

export const stylesGallery = {
  "--background-colour": "var(--transparent)",
  "--border-radius": "unset",
  "--grid-column": "center",
  "--grid-row": "main",
  "--grid-template-rows": "repeat(3, 1fr)",
}

const style = {
  "--padding": "var(--spacing-md)",
}

export const stylesGalleryLayout = ({ metadata }: MarkdownFileProps): StyleObjProps[] => [
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
    "--background-colour": "var(--grey-600)",
    "--border-radius": "0 0 var(--radius-lg) 0",
    "--grid-column": "26 / -1",
    "--grid-row": "3",
    "--transition-article": metadata.id ?? "",
  },
]
