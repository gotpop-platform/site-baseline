import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Tag,
  jsxFactory,
  title,
  withItems
} from "@gotpop-platform/package-baseline"
import { styleArticlesSurfaceMain, stylesArticlesLayout } from "../Home"

import { BlockDataProps } from "@gotpop-platform/types"

const ArticleList = withItems(ArticleItem)

export const blockPageFeaturesIndex = async ({
  query,
  allContent,
  scriptPaths
}: BlockDataProps): Promise<any> => {
  const { slug } = query
  const allForms = allContent.get("Features")

  return (
    <AppTheme
      title={title(slug)}
      scriptPaths={scriptPaths}
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
