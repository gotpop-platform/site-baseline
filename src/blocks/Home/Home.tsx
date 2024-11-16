import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  HeroItem,
  Tag,
  withItems,
} from "@gotpop-platform/package-components"
import { styleMain, stylesLayout } from "."

import { BlockDataProps } from "src/types/types"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

const ArticleList = withItems(ArticleItem)

export const block = ({ query, allContent, scriptPaths, Config }: BlockDataProps) => {
  const allForms = allContent.get("features")

  return (
    <AppTheme title={title("Home", Config.APP.SITE_NAME)} scriptPaths={scriptPaths}>
      <GridGap isRoot>
        <HeaderMegaMenu />
        <Tag tag="main" styles={styleMain}>
          <HeroItem />
          <ArticleList markdownItems={allForms} layout={stylesLayout} />
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}
