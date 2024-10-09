import {
  AppTheme,
  Footer,
  GridGap,
  // MobileMenuTrigger,
} from "@gotpop-platform/package-components"
import { layoutArticlesSlugSurface, stylesBlog } from "variables"

import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

const NotFoundPage = async () => {
  return (
    <AppTheme title={title("Page Not Found", SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          {/* <MobileMenuTrigger /> */}
          {/* <HeaderMegaMenu /> */}
          <Tag tag="main" styles={layoutArticlesSlugSurface}>
            <Tag tag="section" styles={stylesBlog}>
              <h1>404 - Page Not Found</h1>
              <p>Sorry, the page you are looking for does not exist.</p>
            </Tag>
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default NotFoundPage
