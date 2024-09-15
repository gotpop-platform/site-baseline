import {
  Footer,
  GridConfig,
  HeaderMegaMenu,
  HeroItem,
  ListArticles,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, markdownFilesInDir } from "utils"

import { AppTheme } from "layouts"

const pageIndex = async (): Promise<JSX.Element> => {
  const parsedFiles = await markdownFilesInDir("articles")

  return (
    <AppTheme title="Baseline | Home">
      <GridConfig>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <HeroItem />
        <Surface>
          <section class="inner">
            <ListArticles parsedFiles={parsedFiles} />
          </section>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageIndex
