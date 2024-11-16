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
import { styleArticlesSurfaceMain, stylesArticlesLayout } from "../Home"

import { BlockDataProps } from "src/types/types"
import { contentMap } from "@gotpop-platform/package-markdown"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

const ArticleList = withItems(ArticleItem)

export const blockPageFeaturesIndex = async (data: BlockDataProps): Promise<JSX.Element> => {
  const { slug } = data.query

  const allContent = await contentMap()
  const allForms = allContent.get("features")

  return (
    <AppTheme title={title(slug, data.Config.APP.SITE_NAME)} scriptPaths={data.scriptPaths}>
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
