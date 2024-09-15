export type MetaData = {
  slug: string
  title: string
  author?: string
  date?: string
  description: string
  prev?: string
  next?: string
  id?: string
}

export type Toc = {
  level: number
  id: string
  text: string
}

export type MarkdownFile = {
  metadata: Record<string, string> | MetaData
  content: string
  toc?: Toc[]
}
