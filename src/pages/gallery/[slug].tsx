import {
  Footer,
  GalleryIntro,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"

import { AppTheme } from "@layouts/app"
import type { PageProps } from "../../types/pageProps"
import jsxFactory from "@utils/jsxFactory"

const pageGalleryItem = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Baseline | ${slug}`}>
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

export default pageGalleryItem
