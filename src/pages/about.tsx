import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, style, title } from "utils"

import type { PageProps } from "types"

const aboutPage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu
          style={style({
            gridColumn: "center",
            "--grid-column": "center",
          })}
        />
        <Surface
          isMain
          style={style({
            gridColumn: "center",
          })}
        >
          <h1>About page</h1>
        </Surface>
        <Footer
          style={style({
            gridColumn: "center",
            "--grid-column": "center",
          })}
        />
      </GridGap>
    </AppTheme>
  )
}

export default aboutPage
