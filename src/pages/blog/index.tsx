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
import {
  layoutBlog,
  layoutSurfaceMain,
} from "src/variables"

import type { PageProps } from "types"
import { withItems } from "generics"

const ArticleList = withItems(ArticleItem)

const pageBlog = async ({
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
            layout={layoutBlog}
          />
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageBlog
