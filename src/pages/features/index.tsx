import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  MobileMenuTrigger,
  HeaderMegaMenu,
} from "@gotpop-platform/package-components"
import { Tag, withItems } from "generics"
import { styleArticlesSurfaceMain, stylesArticlesLayout } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { parseMarkdownFiles } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"

const ArticleList = withItems(ArticleItem)

const pageArticles = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const markdownItems = await parseMarkdownFiles("src/content/" + slug)

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <MobileMenuTrigger />
          <HeaderMegaMenu />
          <Tag tag="main" styles={styleArticlesSurfaceMain}>
            <ArticleList markdownItems={markdownItems} layout={stylesArticlesLayout} />
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageArticles
