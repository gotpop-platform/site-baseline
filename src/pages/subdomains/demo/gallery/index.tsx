import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/MegaMenu"
import AppTheme from "@layouts/app-theme"
import h from "@utils/jsxFactory"
import Surface from "src/themes/demo/components/Surface"

type PageProps = {
  slug: string
}

const pageGallery = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Gallery | ${slug}`} subdomain="demo">
      <GridConfig>
        <MegaMenu />
        <Surface slug={slug} />
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageGallery
