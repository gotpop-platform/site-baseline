import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
  layoutSurfaceMain,
} from "components"
import {
  jsxFactory,
  markdownFilesInDir,
  title,
} from "utils"

import type { PageProps } from "types"
import { stylesLayout } from "src/layouts"
import { withItems } from "generics"

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
        <Surface isMain style={layoutSurfaceMain}>
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
