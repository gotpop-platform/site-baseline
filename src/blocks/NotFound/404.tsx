import { AppTheme, Footer, GridGap, HeaderMegaMenu, Tag } from "@gotpop-platform/package-components"
import { layoutArticlesSlugSurface, stylesBlog } from "blocks"

import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { scriptPaths } from "build"
import { title } from "@gotpop-platform/package-utilities"

export const blockNotFoundPage = async (data: {
  query: any
  scriptPaths: Record<string, string>[]
}) => {
  return (
    <AppTheme title={title("Page Not Found", SITE_NAME)} scriptPaths={scriptPaths}>
      <GridGap isRoot>
        <div class="graph">
          {/* <MobileMenuTrigger /> */}
          <HeaderMegaMenu />
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
