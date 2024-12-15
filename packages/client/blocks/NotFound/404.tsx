import { AppTheme, Footer, GridGap, HeaderMegaMenu, Tag, jsxFactory, title } from "@gotpop-platform/package-baseline"
import { layoutArticlesSlugSurface, stylesBlog } from ".."

import { BlockDataProps } from "@gotpop-platform/types"

export const blockNotFoundPage = async (data: BlockDataProps) => {
  return (
    <AppTheme
      title={title("Page Not Found")}
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
