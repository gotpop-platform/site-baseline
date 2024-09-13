import {
  ArticleItems,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  HeroItem,
  MobileMenuTrigger,
  Surface,
} from "components"

import { AppTheme } from "@layouts/app"
import type { PageProps } from "../types/pageProps"
import { jsxFactory } from "@utils/jsxFactory"

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
