import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, title } from "utils"

import { GenerateElement } from "src/generics/GenericGridItem"
import { Heading } from "src/components/Heading"
import type { PageProps } from "types"
import { stylesBlog } from "src/variables/layoutBlog"

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
            <Heading level={1} index={1}>
              About
            </Heading>
          </GenerateElement>
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default aboutPage
