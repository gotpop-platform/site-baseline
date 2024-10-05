import { jsxFactory, title } from "@gotpop-platform/utils"
import { AppTheme, Footer, GridGap, HeaderMegaMenu, Heading, MobileMenuTrigger } from "components"
import { stylesAbout, stylesAboutContainer } from "variables"

import { Tag } from "generics"
import { SITE_NAME } from "src/constants"
import type { PageProps } from "types"

const aboutPage = async ({ slug }: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={stylesAboutContainer}>
          <Tag tag="div" styles={stylesAbout}>
            <Heading>About</Heading>
          </Tag>
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default aboutPage
