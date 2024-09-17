import type { MarkdownFileProps } from "utils"

export const stylesLayout = (
  markdownFile: MarkdownFileProps
): { [key: string]: string | number }[] => [
  {
    "--grid-column": "span 12",
    "--transition-article": markdownFile.metadata.slug,
  },
  {
    "--grid-column": "span 6",
    "--transition-article": markdownFile.metadata.slug,
  },
  {
    "--grid-column": "span 6",
    "--transition-article": markdownFile.metadata.slug,
  },
  {
    "--grid-column": "span 6",
    "--transition-article": markdownFile.metadata.slug,
  },
  {
    "--grid-column": "span 6",
    "--transition-article": markdownFile.metadata.slug,
  },
  {
    "--grid-column": "span 12",
    "--transition-article": markdownFile.metadata.slug,
  },
]
