import type {
  MarkdownFileProps,
  StyleObjProps,
} from "utils"

export const stylesLayout = (
  markdownFile: MarkdownFileProps
): StyleObjProps[] => [
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
