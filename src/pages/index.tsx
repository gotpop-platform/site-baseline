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
import { withItems } from "src/components/ArticleItem/HOC"
import { stylesLayout } from "src/layouts"
import type { MarkdownFile } from "utils"
import {
  jsxFactory,
  markdownFilesInDir,
  style,
  title,
  type ArticleItemProps,
} from "utils"

const componentProps = (
  item: MarkdownFile
): ArticleItemProps => ({
  item,
  layout: stylesLayout(item),
})

// Update the ArticleList type
const ArticleList = withItems<
  MarkdownFile,
  ArticleItemProps
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
