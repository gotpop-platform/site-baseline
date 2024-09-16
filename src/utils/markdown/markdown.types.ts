import type { DataItem } from "src/components/ArticleItem/HOC"

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

export type ArticleItemProps = {
  item: DataItem<MarkdownFile>
  layout: { [key: string]: string | number }
}

export type ArticleItemProps2 = {
  item: DataItem<MarkdownFile>
  layout:
    | { [key: string]: string | number }[]
    | { [key: string]: string | number }
}
