import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, title } from "utils"

import type { PageProps } from "types"

const aboutPage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain>
          <h1>About page</h1>
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default aboutPage
