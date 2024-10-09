import {
  AppTheme,
  Footer,
  GalleryIntro,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
} from "@gotpop-platform/package-components"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { layoutArticlesSlugSurface } from "variables"
import { parseMarkdownFile } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"

const pageGalleryItem = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const { metadata, content: htmlContent } = parseMarkdownFile("gallery", slug)

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <MobileMenuTrigger />
          <HeaderMegaMenu />
          <Tag tag="main" styles={layoutArticlesSlugSurface}>
            <GalleryIntro slug={slug} metadata={metadata} htmlContent={htmlContent} />
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageGalleryItem
