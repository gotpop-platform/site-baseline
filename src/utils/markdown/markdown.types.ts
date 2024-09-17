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
  metadata: MetaData
  content: string
  toc?: Toc[]
}

export type ArticleProps = {
  item: MarkdownFile
  layout: styleObj
}

export type ArticleArrayProps = {
  item: MarkdownFile
  layout: styleObj[]
}

export type styleObj = { [key: string]: string | number }
