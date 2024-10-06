import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
} from "components"
import { Tag, withItems } from "generics"
import { layoutBlog, stylesBlogSurfaceMain } from "variables"
import { markdownFilesInDir, title } from "@gotpop-platform/utils"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

const ArticleList = withItems(ArticleItem)

const pageBlog = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir(slug)

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={stylesBlogSurfaceMain}>
          <ArticleList markdownItems={markdownItems} layout={layoutBlog} />
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageBlog
