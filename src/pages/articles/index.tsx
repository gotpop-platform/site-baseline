import {
  Footer,
  GridConfig,
  HeaderMegaMenu,
  ListArticles,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, markdownFilesInDir } from "utils"

import { AppTheme } from "@components/layouts"

const pageArticles = async (): Promise<JSX.Element> => {
  const parsedFiles = await markdownFilesInDir("articles")

  return (
    <AppTheme title="Baseline | Articles">
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
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

export default pageArticles
