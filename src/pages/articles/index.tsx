import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/HeaderMegaMenu"
import MobileMenuTrigger from "@components/MobileMenuTrigger"
import { Surface } from "@components/Surface"
import AppTheme from "@layouts/app"
import h from "@utils/jsxFactory"

type PageProps = {
  slug: string
}

const pageArticles = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Gallery | ${slug}`} >
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <h1>Articles hub</h1>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticles
