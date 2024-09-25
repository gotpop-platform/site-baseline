import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
} from "components"
import { jsxFactory, title } from "utils"
import {
  layoutArticlesSlugSurface,
  stylesBlog,
} from "variables"

import { GenerateElement } from "generics"

const NotFoundPage = async () => {
  return (
    <AppTheme title={title("Page Not Found")}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <GenerateElement
          tag="main"
          styles={layoutArticlesSlugSurface}
        >
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
        </GenerateElement>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default NotFoundPage
