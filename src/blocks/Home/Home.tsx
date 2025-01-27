import {
  ArticleItem,
  HeroItem,
  Icon,
  Tag,
  jsxFactory,
  withItems,
} from "@gotpop-platform/package-baseline"
import { styleMain, stylesLayout } from "."

import type { BlockDataProps } from "@/types"
import { LayoutHome } from "../LayoutHome"

const ArticleList = withItems(ArticleItem)

export const homePage = ({ allContent, scriptPaths }: BlockDataProps) => {
  const allForms = allContent.get("Features")

  return (
    <LayoutHome title="Home" scriptPaths={scriptPaths} home={true}>
      <Tag tag="main" styles={styleMain}>
        <HeroItem />
        <Icon iconName="home" size={132} color="red" />
        <Icon iconName="10k" size={200} color="green" />
        <ArticleList markdownItems={allForms} layout={stylesLayout} />
      </Tag>
    </LayoutHome>
  )
}
