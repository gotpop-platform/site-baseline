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
  style,
  title,
  type MarkdownFileProps,
} from "utils"

import { withItems } from "generics"
import { stylesLayout } from "src/layouts"

const ArticleList = withItems(ArticleItem)

const pageIndex = async (): Promise<JSX.Element> => {
  const markdownItems: MarkdownFileProps[] =
    await markdownFilesInDir("articles")

  return (
    <AppTheme title={title("Home")}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <main
          style={style({
            display: "grid",
            gridColumn: "center",
            "--grid-column": "center",
            gridTemplateColumns: "subgrid",
          })}
        >
          <HeroItem />
          <Surface>
            <ArticleList
              markdownItems={markdownItems}
              layout={stylesLayout}
            />
          </Surface>
        </main>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageIndex
