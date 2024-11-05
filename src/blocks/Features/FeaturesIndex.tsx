import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Tag,
  withItems,
} from "@gotpop-platform/package-components"
import { contentMap, parseMarkdownFiles } from "@gotpop-platform/package-markdown"
import { styleArticlesSurfaceMain, stylesArticlesLayout } from "variables"

import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

const ArticleList = withItems(ArticleItem)

export const blockPageFeaturesIndex = async (
  query: Record<string, string>
): Promise<JSX.Element> => {
  const { slug } = query

  const allContent = await contentMap()
  const allForms = allContent.get("features")

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <MobileMenuTrigger />
          <HeaderMegaMenu />
          <Tag tag="main" styles={styleArticlesSurfaceMain}>
            <ArticleList markdownItems={allForms} layout={stylesArticlesLayout} />
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}
