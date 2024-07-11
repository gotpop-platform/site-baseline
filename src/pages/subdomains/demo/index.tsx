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

const varStr = "--transition-article: article-"

export const Articles = () => (
  <div class="inner">
    {Array.from(articlesData.entries()).map(
      ([key, article], index) => (
        <ArticleItem
          {...article}
          style={varStr + (index + 1)}
        />
      )
    )}
  </div>
)

const pageIndex = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`GotPop | Home`} subdomain="demo">
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <Articles />
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageIndex
