import { AppTheme, ArticleItem, Footer, GridGap, HeaderMegaMenu, HeroItem } from "components"
import { Tag, withItems } from "generics"
import { jsxFactory, markdownFilesInDir, title } from "utils"
import { styleMain, stylesLayout } from "variables"

const ArticleList = withItems(ArticleItem)

const pageIndex = async (): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir("articles")

  return (
    <AppTheme title={title("Home")}>
      <GridGap isRoot>
        {/* <MobileMenuTrigger /> */}
        <HeaderMegaMenu />
        <Tag tag="main" styles={styleMain}>
          <HeroItem />
          <ArticleList markdownItems={markdownItems} layout={stylesLayout} />
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageIndex
