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
    ([key, { href, section, title, blurb }], index) =>
      href === slugPage && (
        <ArticlePage
          section={section}
          blurb={blurb}
          title={title}
          slug={slug}
          style={varStr + (index + 1)}
          href={href}
        />
      )
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
