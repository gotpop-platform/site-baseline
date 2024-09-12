import AppTheme from "@layouts/app"
import { Footer } from "@components/Footer"
import { GridConfig } from "@components/GridConfig"
import { HeaderMegaMenu } from "@components/HeaderMegaMenu"
import { MobileMenuTrigger } from "@components/MobileMenuTrigger"
import { Surface } from "@components/Surface"
import jsxFactory from "@utils/jsxFactory"

const NotFoundPage = async () => {
  return (
    <AppTheme title="Page Not Found">
      <GridConfig>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>
          <section class="not-found">
            <h1>404 - Page Not Found</h1>
            <p>
              Sorry, the page you are looking for does not
              exist.
            </p>
          </section>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default NotFoundPage
