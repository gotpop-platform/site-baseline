import {
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"

import { AppTheme } from "@layouts/app"
import type { PageProps } from "../types/pageProps"
import jsxFactory from "@utils/jsxFactory"

const aboutPage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Baseline | ${slug}`}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>
          <h1>About page</h1>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default aboutPage
