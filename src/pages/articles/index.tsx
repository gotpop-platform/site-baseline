import {
  ArticleItems,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"

import { AppTheme } from "@layouts/app"
import type { PageProps } from "../../types/pageProps"
import { jsxFactory } from "utils"

const pageArticles = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Articles | ${slug}`}>
      <GridConfig>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>
          <ArticleItems />
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticles
