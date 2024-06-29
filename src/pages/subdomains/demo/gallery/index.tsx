import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/MegaMenu"
import AppTheme from "@layouts/app-theme"
import h from "@utils/jsxFactory"
import Surface from "src/themes/demo/components/Surface"

type PageProps = {
  slug: string
}

const pageGalleryItem = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Gallery | ${slug}`}>
      <GridConfig>
        <MegaMenu />
        <Surface slug={slug} />
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageGalleryItem
