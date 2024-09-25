import {
  AppTheme,
  Footer,
  GalleryIntro,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
} from "components"
import { jsxFactory, parseMarkdownFile, title } from "utils"

import { GenerateElement } from "generics"
import type { PageProps } from "types"
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
        <GenerateElement
          tag="main"
          styles={layoutArticlesSlugSurface}
        >
          <GalleryIntro
            slug={slug}
            metadata={metadata}
            htmlContent={htmlContent}
          />
        </GenerateElement>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageGalleryItem
