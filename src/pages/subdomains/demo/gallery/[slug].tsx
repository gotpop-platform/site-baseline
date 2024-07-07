import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/HeaderMegaMenu"
import MobileMenuTrigger from "@components/MobileMenuTrigger"
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
    <AppTheme title={`Gallery | ${slug}`} subdomain="demo">
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface slug={slug} />
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageGalleryItem
