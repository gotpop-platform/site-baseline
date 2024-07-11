import AppTheme from "@layouts/app-theme"
import ArticleItem from "src/themes/demo/components/ArticleItem"
import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/HeaderMegaMenu"
import MobileMenuTrigger from "@components/MobileMenuTrigger"
import Surface from "src/themes/demo/components/Surface"
import { articlesData } from "src/themes/demo/data/articlesData"
import h from "@utils/jsxFactory"

type PageProps = {
  slug: string
}

const pageArticleItem = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const slugPage = "/articles/" + slug
  const varStr = "--transition-article: article-"
  const articlesArr = Array.from(articlesData.entries())

  const articleItem = articlesArr.map(
    ([key, article], index) => {
      const { href } = article

      return href === slugPage ? (
        <ArticleItem
          {...article}
          style={varStr + (index + 1)}
        />
      ) : null
    }
  )

  return (
    <AppTheme title={`Gallery | ${slug}`} subdomain="demo">
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <div class="inner">{articleItem}</div>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticleItem
