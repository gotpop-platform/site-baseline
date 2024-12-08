import { AppTheme, Footer, GridGap, HeaderMegaMenu, Tag } from "@gotpop-platform/package-baseline"
import { layoutArticlesSlugSurface, stylesBlog } from "blocks"

import { BlockDataProps } from "src/types/types"
import { jsxFactory } from "@gotpop-platform/package-baseline"
import { title } from "@gotpop-platform/package-baseline"

export const blockNotFoundPage = async (data: BlockDataProps) => {
  return (
    <AppTheme
      title={title("Page Not Found", process.env.npm_package_config_app_site_name || "GotPop")}
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