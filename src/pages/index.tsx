import {
  ArticleItems,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  HeroItem,
  MobileMenuTrigger,
  Surface,
} from "components"

import { AppTheme } from "layouts"
import { jsxFactory } from "utils"

const pageIndex = async (): Promise<JSX.Element> => (
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
