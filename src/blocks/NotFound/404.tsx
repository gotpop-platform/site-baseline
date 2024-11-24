import { AppTheme, Footer, GridGap, HeaderMegaMenu, Tag } from "@gotpop-platform/package-components"
import { layoutArticlesSlugSurface, stylesBlog } from "blocks"

import { BlockDataProps } from "src/types/types"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

export const blockNotFoundPage = async (data: BlockDataProps) => {
  return (
    <AppTheme
      title={title("Page Not Found", data.Config.APP.SITE_NAME)}
      scriptPaths={data.scriptPaths}
    >
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
