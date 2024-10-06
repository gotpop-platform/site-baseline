import { AppTheme, Footer, GridGap, HeaderMegaMenu, MobileMenuTrigger } from "components"
import { jsxFactory, title } from "utils"
import { layoutArticlesSlugSurface, stylesBlog } from "variables"

import { SITE_NAME } from "src/constants"
import { Tag } from "generics"

const NotFoundPage = async () => {
  return (
    <AppTheme title={title("Page Not Found", SITE_NAME)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={layoutArticlesSlugSurface}>
          <Tag tag="section" styles={stylesBlog}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
          </Tag>
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default NotFoundPage
