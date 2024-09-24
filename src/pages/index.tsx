import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  HeroItem,
  MobileMenuTrigger,
  Surface,
} from "components"
import {
  jsxFactory,
  markdownFilesInDir,
  title,
} from "utils"
import {
  layoutSurfaceHero,
  layoutSurfaceMain,
  stylesLayout,
} from "variables"

import { Main } from "src/components/Main"
import { withItems } from "generics"

const ArticleList = withItems(ArticleItem)

const pageIndex = async (): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir("articles")

  return (
    <AppTheme title={title("Home")}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Main>
          <Surface style={layoutSurfaceHero}>
            <HeroItem />
          </Surface>
          <Surface style={layoutSurfaceMain}>
            <ArticleList
              markdownItems={markdownItems}
              layout={stylesLayout}
            />
          </Surface>
        </Main>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageIndex
