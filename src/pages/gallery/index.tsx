import {
  Footer,
  GalleryIntro,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"

import { AppTheme } from "@layouts/app"
import type { PageProps } from "types"
import { jsxFactory } from "utils"

const pageGallery = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Gallery | ${slug}`}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>
          <GalleryIntro slug={slug} />
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageGallery
