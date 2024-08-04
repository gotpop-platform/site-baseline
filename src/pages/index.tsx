import { ArticleItems } from "@components/ArticleItem"
import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/HeaderMegaMenu"
import { HeroItem } from "@components/HeroItem"
import MobileMenuTrigger from "@components/MobileMenuTrigger"
import { Surface } from "@components/Surface"
import AppTheme from "@layouts/app"
import jsxFactory from "@utils/jsxFactory"

type PageProps = {
  slug: string
}

const pageIndex = async ({
  slug,
}: PageProps): Promise<JSX.Element> => (
  <AppTheme title={`GotPop | Home`} >
    <GridConfig>
      <MobileMenuTrigger />
      <MegaMenu />
      <HeroItem />
      <Surface>
        <ArticleItems />
      </Surface>
      <Footer />
    </GridConfig>
  </AppTheme>
)

export default pageIndex
