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
  type ArticleArrayProps,
  type MarkdownFileProps,
} from "utils"

const componentProps = (
  item: MarkdownFileProps
): ArticleArrayProps => ({
  item,
  layout: stylesLayout(item),
})

const ArticleList = withItems<
  MarkdownFileProps,
  ArticleArrayProps
>(ArticleItem)

const pageArticles = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const parsedFiles: MarkdownFileProps[] =
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
