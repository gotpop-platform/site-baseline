import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  HeroItem,
  MobileMenuTrigger,
} from "components"
import { Tag, withItems } from "generics"
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
        <Tag tag="main" styles={stylesMain}>
          <Tag tag="section" styles={layoutSurfaceHero}>
            <HeroItem />
          </Tag>
          <Tag tag="section" styles={layoutSurfaceMain}>
            <ArticleList
              markdownItems={markdownItems}
              layout={stylesLayout}
            />
          </Tag>
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageIndex
