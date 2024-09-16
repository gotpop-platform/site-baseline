import { jsxFactory, mkUrl, style } from "utils"

import { ArticleItem } from "./ArticleItem"
import { Fragment } from "../Fragment"

interface ArticleData {
  metadata: {
    title: string
    blurb: string
    href: string
    description: string
  }
}

interface WithArticleItemsProps {
  data: ArticleData[]
  layout: () => { [key: string]: string | number }[]
}

function withArticleItems(Component) {
  return function WrappedComponent({
    data,
    layout,
  }: WithArticleItemsProps) {
    return (
      <Fragment>
        {data.map((item, index) => {
          console.log("item :", item)

          return (
            <Component
              title={item.metadata.title}
              blurb={item.metadata.description}
              href={mkUrl("articles/" + item.metadata.slug)}
              style={style(layout(item)[index])}
            />
          )
        })}
      </Fragment>
    )
  }
}

const ArticleList = withArticleItems(ArticleItem)

export default ArticleList
