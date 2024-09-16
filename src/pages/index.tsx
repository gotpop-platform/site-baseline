import {
  AppTheme,
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
} from "utils"

import ArticleList from "src/components/ArticleItem/HOC"

const pageIndex = async (): Promise<JSX.Element> => {
  const parsedFiles = await markdownFilesInDir("articles")

  const stylesLayout = (item: any) => [
    {
      "--grid-column": "span 12",
      "--transition-article": item.metadata.slug,
    },
    {
      "--grid-column": "span 6",
      "--transition-article": item.metadata.slug,
    },
    {
      "--grid-column": "span 6",
      "--transition-article": item.metadata.slug,
    },
    {
      "--grid-column": "span 6",
      "--transition-article": item.metadata.slug,
    },
    {
      "--grid-column": "span 6",
      "--transition-article": item.metadata.slug,
    },
    {
      "--grid-column": "span 12",
      "--transition-article": item.metadata.slug,
    },
  ]

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
              layout={stylesLayout}
            />
          </Surface>
        </main>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageIndex
