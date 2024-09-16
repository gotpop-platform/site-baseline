import {
  AppTheme,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"

import type { PageProps } from "types"
import { jsxFactory } from "utils"

const aboutPage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Baseline | ${slug}`}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain hasInner>
          <h1>About page</h1>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default aboutPage
