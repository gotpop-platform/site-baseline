import {
  ArticlePage,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"

import { AppTheme } from "@layouts/app"
import type { PageProps } from "../../types/pageProps"
import { articlesData } from "@data/articlesData"
import jsxFactory from "@utils/jsxFactory"

const pageArticlePage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const slugPage = "/articles/" + slug
  const varStr = "--transition-article: article-"
  const articlesArr = Array.from(articlesData.entries())

  const articlePage = articlesArr.map(
    ([key, article], index) => {
      const { href } = article

      return href === slugPage ? (
        <ArticlePage
          {...article}
          slug={slug}
          style={varStr + (index + 1)}
        />
      ) : null
    }
  )

  return (
    <AppTheme title={`Article | ${slug}`}>
      <GridConfig>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>{articlePage}</Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticlePage
