import {
  AppTheme,
  ArticleItem,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { withItems } from "src/components/ArticleItem/HOC"
import { stylesLayout } from "src/layouts"
import type { PageProps } from "types"
import {
  jsxFactory,
  markdownFilesInDir,
  title,
  type ArticleItemWithStyleArrayProps,
  type MarkdownFile,
} from "utils"

const componentProps = (
  item: MarkdownFile
): ArticleItemWithStyleArrayProps => ({
  item,
  layout: stylesLayout(item),
})

const ArticleList = withItems<
  MarkdownFile,
  ArticleItemWithStyleArrayProps
>(ArticleItem)

const pageArticles = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const parsedFiles: MarkdownFile[] =
    await markdownFilesInDir(slug)

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
