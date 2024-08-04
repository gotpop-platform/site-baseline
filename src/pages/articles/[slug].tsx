import { ArticlePage } from "@components/ArticlePage"
import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/HeaderMegaMenu"
import MobileMenuTrigger from "@components/MobileMenuTrigger"
import { Surface } from "@components/Surface"
import { articlesData } from "@data/articlesData"
import AppTheme from "@layouts/app"
import jsxFactory from "@utils/jsxFactory"

type PageProps = {
  slug: string
}

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
    <AppTheme title={`Article | ${slug}`} >
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>{articlePage}</Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticlePage
