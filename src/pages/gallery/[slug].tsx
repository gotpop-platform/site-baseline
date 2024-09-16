import {
  Footer,
  GalleryIntro,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, parseMarkdownFile } from "utils"

import { AppTheme } from "@components/layouts"
import type { PageProps } from "types"

const pageGalleryItem = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const { metadata, content: htmlContent } =
    parseMarkdownFile("gallery", slug)

  return (
    <AppTheme title={`Baseline | ${slug}`}>
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
