import {
  AppTheme,
  ArticleItem,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  HeroItem,
  MobileMenuTrigger,
  Surface,
} from "components"
import type {
  ArticleItemWithStyleArrayProps,
  MarkdownFile,
} from "utils"
import {
  jsxFactory,
  markdownFilesInDir,
  style,
  title,
} from "utils"

import { withItems } from "src/components/ArticleItem/HOC"
import { stylesLayout } from "src/layouts"

const componentProps = (
  item: MarkdownFile
): ArticleItemWithStyleArrayProps => ({
  item,
  layout: stylesLayout(item),
})

// Update the ArticleList type
const ArticleList = withItems<
  MarkdownFile,
  ArticleItemWithStyleArrayProps
>(ArticleItem)

const pageIndex = async (): Promise<JSX.Element> => {
  const parsedFiles: MarkdownFile[] =
    await markdownFilesInDir("articles")

  return (
    <AppTheme title={title("Home")}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <main
          style={style({
            display: "grid",
            gridColumn: "box",
            gridTemplateColumns: "subgrid",
          })}
        >
          <HeroItem />
          <Surface hasInner>
            <ArticleList
              data={parsedFiles}
              componentProps={componentProps}
            />
          </Surface>
        </main>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageIndex
