import type { MarkdownFile } from "utils"

export const stylesLayout = (
  item: MarkdownFile
): { [key: string]: string | number }[] => [
  {
    "--grid-column": "span 12",
    "--transition-article": item.metadata.slug,
  },
  {
    "--grid-column": "span 6",
    "--transition-article": item.metadata.slug,
  },
  {
    "--grid-column": "span 6",
    "--transition-article": item.metadata.slug,
  },
  {
    "--grid-column": "span 6",
    "--transition-article": item.metadata.slug,
  },
  {
    "--grid-column": "span 6",
    "--transition-article": item.metadata.slug,
  },
  {
    "--grid-column": "span 12",
    "--transition-article": item.metadata.slug,
  },
]
