import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Tag,
  withItems,
} from "@gotpop-platform/package-baseline"
import { styleArticlesSurfaceMain, stylesArticlesLayout } from "../Home"

import { BlockDataProps } from "@gotpop-platform/types"
import { jsxFactory } from "@gotpop-platform/package-baseline"
import { title } from "@gotpop-platform/package-baseline"

const ArticleList = withItems(ArticleItem)

export const blockPageFeaturesIndex = async (data: BlockDataProps): Promise<string> => {
  const { slug } = data.query

  const allForms = data.allContent.get("Features")

  return (
    <AppTheme
      title={title(slug, process.env.npm_package_config_app_site_name || "GotPop")}
      scriptPaths={data.scriptPaths}
    >
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
