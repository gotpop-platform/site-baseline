import {
  AppTheme,
  Footer,
  GalleryIntro,
  GridGap,
  MobileMenuTrigger,
  HeaderMegaMenu,
} from "@gotpop-platform/package-components"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { layoutArticlesSlugSurface } from "variables"
import { parseMarkdownFile } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"

const pageGalleryItem = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const { htmlSectionsMap, pageMetadata } = parseMarkdownFile("src/content/docs", slug)
  const mainHtml = htmlSectionsMap.get("main")

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <MobileMenuTrigger />
          <HeaderMegaMenu />
          <Tag tag="main" styles={layoutArticlesSlugSurface}>
            <GalleryIntro slug={slug} metadata={pageMetadata} htmlContent={mainHtml?.html ?? ""} />
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageGalleryItem
