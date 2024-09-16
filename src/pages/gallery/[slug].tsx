import {
  Footer,
  GalleryIntro,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, parseMarkdownFile } from "utils"

import { AppTheme } from "components"
import type { PageProps } from "types"
import { title } from "utils"

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
