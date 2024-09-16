import {
  Footer,
  GridConfig,
  HeaderMegaMenu,
  HeroItem,
  ListArticles,
  MobileMenuTrigger,
  Surface,
} from "components"
import {
  jsxFactory,
  markdownFilesInDir,
  styleNames,
} from "utils"

import { AppTheme } from "components"

const pageIndex = async (): Promise<JSX.Element> => {
  const parsedFiles = await markdownFilesInDir("articles")

  return (
    <AppTheme title="Baseline | Home">
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <main
          style={styleNames({
            display: "grid",
            gridColumn: "box",
            gridTemplateColumns: "subgrid",
          })}
        >
          <HeroItem />
          <Surface hasInner>
            <ListArticles parsedFiles={parsedFiles} />
          </Surface>
        </main>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageIndex
