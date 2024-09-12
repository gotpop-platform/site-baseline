import {
  Footer,
  GalleryIntro,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"

import { AppTheme } from "@layouts/app"
import jsxFactory from "@utils/jsxFactory"

type PageProps = {
  slug: string
}

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
