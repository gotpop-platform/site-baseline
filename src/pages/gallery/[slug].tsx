import {
  AppTheme,
  Footer,
  GalleryIntro,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, parseMarkdownFile, title } from "utils"

import type { PageProps } from "types"

const pageGalleryItem = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const { metadata, content: htmlContent } =
    parseMarkdownFile("gallery", slug)

  return (
    <AppTheme title={title(slug)}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain>
          <GalleryIntro
            slug={slug}
            metadata={metadata}
            htmlContent={htmlContent}
          />
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageGalleryItem
