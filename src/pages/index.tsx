import {
  AppTheme,
  ArticleItem,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  HeroItem,
  MobileMenuTrigger,
  Surface,
  type ArticleItemProps,
} from "components"
import {
  withItems,
  type DataItem,
} from "src/components/ArticleItem/HOC"
import { stylesLayout } from "src/layouts"
import {
  jsxFactory,
  markdownFilesInDir,
  style,
  title,
} from "utils"

// Define the metadata interface
interface ArticleMetadata {
  title: string
  description: string
  slug: string
  layout: () => { [key: string]: string | number }[]
}

// Define the component props function
const articleComponentProps = (
  item: DataItem<ArticleMetadata>
) => ({
  item: item,
  layout: stylesLayout,
})

// Use the HOC
const ArticleList = withItems<
  ArticleMetadata,
  ArticleItemProps
>(ArticleItem)

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
            <ArticleList
              data={parsedFiles}
              componentProps={articleComponentProps}
            />
          </Surface>
        </main>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageIndex
