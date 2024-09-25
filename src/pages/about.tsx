import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  Heading,
  MobileMenuTrigger,
} from "components"
import { jsxFactory, title } from "utils"
import {
  layoutArticlesSlugSurface,
  stylesBlog,
} from "variables"

import { GenerateElement } from "generics"
import type { PageProps } from "types"

const aboutPage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <GenerateElement
          tag="main"
          styles={layoutArticlesSlugSurface}
        >
          <GenerateElement tag="div" styles={stylesBlog}>
            <Heading>About</Heading>
          </GenerateElement>
        </GenerateElement>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default aboutPage
