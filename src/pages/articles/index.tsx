import {
  AppTheme,
  ArticleItem,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { withItems } from "generics"
import { stylesLayout } from "src/layouts"
import type { PageProps } from "types"
import {
  jsxFactory,
  markdownFilesInDir,
  title,
  type MarkdownFileProps,
} from "utils"

const ArticleList = withItems(ArticleItem)

const pageArticles = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const markdownItems: MarkdownFileProps[] =
    await markdownFilesInDir(slug)

  return (
    <AppTheme title={title(slug)}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain hasInner>
          <ArticleList
            markdownItems={markdownItems}
            layout={stylesLayout}
          />
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticles
