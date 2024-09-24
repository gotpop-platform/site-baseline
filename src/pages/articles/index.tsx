import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import {
  jsxFactory,
  markdownFilesInDir,
  title,
} from "utils"

import { withItems } from "generics"
import { stylesLayout } from "src/layouts"
import type { PageProps } from "types"

const ArticleList = withItems(ArticleItem)

const pageArticles = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir(slug)

  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain>
          <ArticleList
            markdownItems={markdownItems}
            layout={stylesLayout}
          />
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageArticles
