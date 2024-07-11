import AppTheme from "@layouts/app-theme"
import ArticleItem from "src/themes/demo/components/ArticleItem"
import Footer from "@components/Footer"
import GalleryIntro from "src/themes/demo/components/GalleryIntro"
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
    {articlesData.map((article, index) => (
      <ArticleItem
        {...article}
        style={
          "--transition-article: article-" + (index + 1)
        }
      />
    ))}
  </div>
)

const pageIndex = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Gallery | ${slug}`} subdomain="demo">
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <GalleryIntro slug={slug} />
          <Articles />
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageIndex
