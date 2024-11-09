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

import { SITE_NAME } from "src/constants"
import { allContent } from "../../../serve"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

const ArticleList = withItems(ArticleItem)

export const block = (query: Record<string, string>) => {
  const allForms = allContent.get("features")

  return (
    <AppTheme title={title("Home", SITE_NAME)}>
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
