import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/MegaMenu"
import AppTheme from "@layouts/app-theme"
import h from "@utils/jsxFactory"
import Surface from "src/themes/demo/components/Surface"

type PageProps = {
  slug: string
}

const pageIndex = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Gallery | ${slug}`} subdomain="demo">
      <GridConfig>
        <button
          popovertarget="liambest"
          style="display: grid; grid-column: box; position: fixed; top: 0; right: 0; z-index: 1000"
        >
          Open
        </button>
        <MegaMenu />
        <Surface slug={slug} />
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageIndex
