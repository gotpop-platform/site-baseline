import {
  AppTheme,
  Footer,
  GalleryIntro,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
} from "components"
import { jsxFactory, parseMarkdownFile, title } from "utils"

import type { PageProps } from "types"
import { Tag } from "generics"
import { layoutArticlesSlugSurface } from "variables"

const pageGalleryItem = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const { metadata, content: htmlContent } =
    parseMarkdownFile("gallery", slug)

  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={layoutArticlesSlugSurface}>
          <GalleryIntro
            slug={slug}
            metadata={metadata}
            htmlContent={htmlContent}
          />
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageGalleryItem
