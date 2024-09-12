import { AppTheme } from "@layouts/app"
import { ArticleItems } from "@components/ArticleItem"
import { Footer } from "@components/Footer"
import { GridConfig } from "@components/GridConfig"
import { HeaderMegaMenu } from "@components/HeaderMegaMenu"
import { HeroItem } from "@components/HeroItem"
import { MobileMenuTrigger } from "@components/MobileMenuTrigger"
import type { PageProps } from "../types/pageProps"
import { Surface } from "@components/Surface"
import jsxFactory from "@utils/jsxFactory"

const pageIndex = async ({
  slug,
}: PageProps): Promise<JSX.Element> => (
  <AppTheme title={`GotPop | Home`}>
    <GridConfig>
      <MobileMenuTrigger />
      <HeaderMegaMenu />
      <HeroItem />
      <Surface>
        <ArticleItems />
      </Surface>
      <Footer />
    </GridConfig>
  </AppTheme>
)

export default pageIndex
