import AppTheme from "@layouts/app-theme"
import { ArticleItems } from "@themes/demo/components/ArticleItem"
import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import { Hero } from "@themes/demo/components/Hero"
import MegaMenu from "@components/HeaderMegaMenu"
import MobileMenuTrigger from "@components/MobileMenuTrigger"
import { Surface } from "@themes/demo/components/Surface"
import h from "@utils/jsxFactory"

type PageProps = {
  slug: string
}

const pageIndex = async ({
  slug,
}: PageProps): Promise<JSX.Element> => (
  <AppTheme title={`GotPop | Home`} subdomain="demo">
    <GridConfig>
      <MobileMenuTrigger />
      <MegaMenu />
      <Hero />
      <Surface>
        <ArticleItems />
      </Surface>
      <Footer />
    </GridConfig>
  </AppTheme>
)

export default pageIndex
