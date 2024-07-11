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

export const Articles = () => (
  <div class="inner">
    {articlesData.map((article) => (
      <ArticleItem {...article} />
    ))}
  </div>
)

const pageGallery = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Gallery | ${slug}`} subdomain="demo">
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <h1>Articles hub</h1>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageGallery
