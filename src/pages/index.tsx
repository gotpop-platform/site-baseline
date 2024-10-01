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
  styleHero,
  styleMain,
  styleSurfaceMain,
  stylesLayout,
} from "variables"

const ArticleList = withItems(ArticleItem)

const pageIndex = async (): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir("articles")

  return (
    <AppTheme title={title("Home")}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={styleMain}>
          <Tag tag="section" styles={styleHero}>
            <HeroItem />
          </Tag>
          <Tag tag="section" styles={styleSurfaceMain}>
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
