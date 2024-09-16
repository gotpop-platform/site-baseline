import type { Layout } from "src/components/ArticleItem"

export const stylesLayout = (item: any): Layout[] => [
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
