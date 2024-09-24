import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, style, title } from "utils"

const NotFoundPage = async () => {
  return (
    <AppTheme title={title("Page Not Found")}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain hasInner>
          <section
            class="not-found"
            style={style({
              gridColumn: "1 / span 12",
            })}
          >
            <h1>404 - Page Not Found</h1>
            <p>
              Sorry, the page you are looking for does not
              exist.
            </p>
          </section>
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default NotFoundPage
