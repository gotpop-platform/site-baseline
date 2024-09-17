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

export type MarkdownFileProps = {
  metadata: MetaData
  content: string
  toc?: Toc[]
}

export type ArticleProps = {
  item: MarkdownFileProps
  layout: StyleObj
}

export type ArticleArrayProps = {
  item: MarkdownFileProps
  layout: StyleObj[]
}

export type StyleObj = { [key: string]: string | number }
