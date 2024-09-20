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
import {
  jsxFactory,
  markdownFilesInDir,
  style,
  title,
  type MarkdownFileProps,
  type StyleObjProps
} from "utils"

import { withItems } from "src/components/ArticleItem/HOC"
import { stylesLayout } from "src/layouts"


const componentProps = (
  markdownFile: MarkdownFileProps
) => ({
  markdownFile,
  layout: stylesLayout(markdownFile),
})

const ArticleList = withItems<MarkdownFileProps, StyleObjProps | StyleObjProps[]>(ArticleItem)

const pageIndex = async (): Promise<JSX.Element> => {
  const parsedMardownFiles: MarkdownFileProps[] =
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
              data={parsedMardownFiles}
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
