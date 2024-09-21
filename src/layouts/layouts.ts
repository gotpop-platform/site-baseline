import type {
  MarkdownFileProps,
  StyleObjProps,
} from "utils"

export const stylesLayout = (
  markdownFile: MarkdownFileProps
): StyleObjProps[] => [
  {
    "--grid-column": "span 14",
    "--transition-article": markdownFile.metadata.slug,
  },
  {
    "--grid-column": "span 7",
    "--transition-article": markdownFile.metadata.slug,
  },
  {
    "--grid-column": "span 7",
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

export const layoutBlog = (
  markdownFile: MarkdownFileProps
): StyleObjProps[] => [
  {
    "--grid-column": "3 / span 13",
    "--grid-row": "2",
    "--transition-article": markdownFile.metadata.slug,
  },
  {
    "--grid-column": "18 / 37",
    "--grid-row": "2",
    "--transition-article": markdownFile.metadata.slug,
  },
  {
    "--grid-column": "3/ 37",
    "--grid-row": "4 / span 1",
    "--transition-article": markdownFile.metadata.slug,
  },
  {
    "--grid-column": "3/ 37",
    "--grid-row": "6 / span 1",
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
