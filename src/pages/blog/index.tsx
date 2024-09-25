import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
} from "components"
import { GenerateElement, withItems } from "generics"
import {
  jsxFactory,
  markdownFilesInDir,
  title,
} from "utils"
import { layoutBlog, layoutSurfaceMain } from "variables"

import type { PageProps } from "types"

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
        <GenerateElement
          tag="main"
          styles={layoutSurfaceMain}
        >
          <ArticleList
            markdownItems={markdownItems}
            layout={layoutBlog}
          />
        </GenerateElement>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageBlog
