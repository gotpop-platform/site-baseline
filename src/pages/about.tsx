import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  Heading,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, title } from "utils"

import { GenerateElement } from "generics"
import type { PageProps } from "types"
import { stylesBlog } from "variables"

const aboutPage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain>
          <GenerateElement tag="div" styles={stylesBlog}>
            <Heading>About</Heading>
          </GenerateElement>
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default aboutPage
