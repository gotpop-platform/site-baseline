import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, title } from "utils"

import { GenerateElement } from "generics"
import { stylesBlog } from "variables"

const NotFoundPage = async () => {
  return (
    <AppTheme title={title("Page Not Found")}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain hasInner>
          <GenerateElement
            tag="section"
            styles={stylesBlog}
          >
            <h1>404 - Page Not Found</h1>
            <p>
              Sorry, the page you are looking for does not
              exist.
            </p>
          </GenerateElement>
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default NotFoundPage
