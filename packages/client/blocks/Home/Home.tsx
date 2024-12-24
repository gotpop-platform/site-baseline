import {
  ArticleItem,
  HeroItem,
  Icon,
  Tag,
  jsxFactory,
  withItems,
} from "@gotpop-platform/package-baseline"
import { styleMain, stylesLayout } from "."

import { BlockDataProps } from "@gotpop-platform/types"
import { Layout } from "../Layout"

const ArticleList = withItems(ArticleItem)

export const homePage = ({ allContent, scriptPaths }: BlockDataProps) => {
  const allForms = allContent.get("Features")

  return (
    <Layout title="Home" scriptPaths={scriptPaths}>
      <Tag tag="main" styles={styleMain}>
        <HeroItem />
        <Icon iconName="home" size={132} color="red" />
        <Icon iconName="10k" size={200} color="green" />
        <ArticleList markdownItems={allForms} layout={stylesLayout} />
      </Tag>
    </Layout>
  )
}
