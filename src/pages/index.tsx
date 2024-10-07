import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  HeroItem,
} from "@gotpop-platform/package-components"
import { Tag, withItems } from "generics"
import { styleMain, stylesLayout } from "variables"

import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { markdownFilesInDir } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"

const ArticleList = withItems(ArticleItem)

const pageIndex = async (): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir("articles")

  return (
    <AppTheme title={title("Home", SITE_NAME)}>
      <GridGap isRoot>
        {/* <MobileMenuTrigger /> */}
        <HeaderMegaMenu />
        <Tag tag="main" styles={styleMain}>
          <HeroItem />
          <ArticleList markdownItems={markdownItems} layout={stylesLayout} />
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageIndex
