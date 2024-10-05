import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
} from "components"
import { Tag, withItems } from "generics"
import { jsxFactory, markdownFilesInDir, title } from "utils"
import { styleArticlesSurfaceMain, stylesArticlesLayout } from "variables"

import type { PageProps } from "types"

const ArticleList = withItems(ArticleItem)

const pageArticles = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir(slug)

  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={styleArticlesSurfaceMain}>
          <ArticleList markdownItems={markdownItems} layout={stylesArticlesLayout} />
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageArticles
