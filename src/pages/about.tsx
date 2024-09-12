import { AppTheme } from "@layouts/app"
import { Footer } from "@components/Footer"
import { GridConfig } from "@components/GridConfig"
import { HeaderMegaMenu } from "@components/HeaderMegaMenu"
import { MobileMenuTrigger } from "@components/MobileMenuTrigger"
import type { PageProps } from "../types/pageProps"
import { Surface } from "@components/Surface"
import jsxFactory from "@utils/jsxFactory"

const aboutPage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Baseline | ${slug}`}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>
          <h1>About page</h1>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default aboutPage
