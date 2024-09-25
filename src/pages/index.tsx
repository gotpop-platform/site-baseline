import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  HeroItem,
  MobileMenuTrigger,
} from "components"
import { GenerateElement, withItems } from "generics"
import {
  jsxFactory,
  markdownFilesInDir,
  title,
} from "utils"
import {
  layoutSurfaceHero,
  layoutSurfaceMain,
  stylesLayout,
  stylesMain,
} from "variables"

const ArticleList = withItems(ArticleItem)

const pageIndex = async (): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir("articles")

  return (
    <AppTheme title={title("Home")}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <GenerateElement tag="main" styles={stylesMain}>
          <GenerateElement
            tag="section"
            styles={layoutSurfaceHero}
          >
            <HeroItem />
          </GenerateElement>
          <GenerateElement
            tag="section"
            styles={layoutSurfaceMain}
          >
            <ArticleList
              markdownItems={markdownItems}
              layout={stylesLayout}
            />
          </GenerateElement>
        </GenerateElement>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageIndex
