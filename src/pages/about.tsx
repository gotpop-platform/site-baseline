import {
  AppTheme,
  Footer,
  GridGap,
  Heading,
  MobileMenuTrigger,
} from "@gotpop-platform/package-components"
import { stylesAbout, stylesAboutContainer } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"
import { HeaderMegaMenu } from "src/com/HeaderMegaMenu"

const aboutPage = async ({ slug }: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <MobileMenuTrigger />
          <HeaderMegaMenu />
          <Tag tag="main" styles={stylesAboutContainer}>
            <Tag tag="div" styles={stylesAbout}>
              <Heading>About</Heading>
            </Tag>
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default aboutPage
