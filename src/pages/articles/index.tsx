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
  type MarkdownFileProps,
  type StyleObjProps
} from "utils"

const componentProps = (
  markdownFile: MarkdownFileProps
) => ({
  markdownFile,
  layout: stylesLayout(markdownFile),
})

const ArticleList = withItems<
  MarkdownFileProps, 
  StyleObjProps | StyleObjProps[]
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
            markdownItems={parsedFiles}
            componentProps={componentProps} 
             />
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticles
