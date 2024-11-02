import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeroItem,
  HeaderMegaMenu,
  Tag,
  withItems,
} from "@gotpop-platform/package-components"
import { styleMain, stylesLayout } from "variables"

import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { contentMap, parseMarkdownFiles } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"
import { SITE_NAME } from "src/constants"

const ArticleList = withItems(ArticleItem)

const pageIndex = async (): Promise<JSX.Element> => {
  const allContent = await contentMap()
  const allForms = allContent.get("features")

  return (
    <AppTheme title={title("Home", SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <HeaderMegaMenu />
          <Tag tag="main" styles={styleMain}>
            <HeroItem />
            <ArticleList markdownItems={allForms} layout={stylesLayout} />
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageIndex
