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
  type MarkdownFileProps,
} from "utils"

import { withItems } from "generics"
import { Main } from "src/components/Main"
import { layoutSurfaceHero, layoutSurfaceMain, stylesLayout } from "src/layouts"

const ArticleList = withItems(ArticleItem)

const pageIndex = async (): Promise<JSX.Element> => {
  const markdownItems: MarkdownFileProps[] =
    await markdownFilesInDir("articles")

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
