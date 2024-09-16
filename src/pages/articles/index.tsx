import {
  AppTheme,
  ArticleItem,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import {
  jsxFactory,
  markdownFilesInDir,
  title,
  type ArticleItemProps2,
  type MarkdownFile,
} from "utils"

import {
  withItems,
  type DataItem,
} from "src/components/ArticleItem/HOC"
import { stylesLayout } from "src/layouts"
import type { PageProps } from "types"

const componentProps = (
  item: DataItem<MarkdownFile>
): ArticleItemProps2 => ({
  item: item,
  layout: stylesLayout(item),
})

// Update the ArticleList type
const ArticleList = withItems<
  DataItem<MarkdownFile>,
  ArticleItemProps2
>(ArticleItem)

const pageArticles = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const parsedFiles: DataItem<MarkdownFile>[] =
    await markdownFilesInDir(slug)
  console.log("parsedFiles :", parsedFiles)

  return (
    <AppTheme title={title(slug)}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain hasInner>
          <ArticleList
            data={parsedFiles}
            componentProps={componentProps}
          />
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticles
