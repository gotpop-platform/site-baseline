export type MetaData = {
  slug: string
  title: string
  author: string
  date: string
}

export type MarkdownFile = {
  metadata: Record<string, string> | MetaData
  content: string
}
