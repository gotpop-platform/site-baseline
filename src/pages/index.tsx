import {
  AppTheme,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  HeroItem,
  ListArticles,
  MobileMenuTrigger,
  Surface,
} from "components"
import {
  jsxFactory,
  markdownFilesInDir,
  style,
  title,
} from "utils"

const pageIndex = async (): Promise<JSX.Element> => {
  const parsedFiles = await markdownFilesInDir("articles")

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
            <ListArticles parsedFiles={parsedFiles} />
          </Surface>
        </main>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageIndex
