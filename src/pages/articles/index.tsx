import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
} from "@gotpop-platform/package-components"
import { Tag, withItems } from "generics"
import { styleArticlesSurfaceMain, stylesArticlesLayout } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { markdownFilesInDir } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"

const ArticleList = withItems(ArticleItem)

const pageArticles = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir(slug)

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
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
