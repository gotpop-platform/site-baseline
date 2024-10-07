import {
  AppTheme,
  Footer,
  GalleryIntro,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
} from "components"
import { parseMarkdownFile, title } from "utils"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { layoutArticlesSlugSurface } from "variables"

const pageGalleryItem = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const { metadata, content: htmlContent } = parseMarkdownFile("gallery", slug)

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={layoutArticlesSlugSurface}>
          <GalleryIntro slug={slug} metadata={metadata} htmlContent={htmlContent} />
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageGalleryItem
