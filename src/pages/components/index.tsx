import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  MobileMenuTrigger,
} from "@gotpop-platform/package-components"
import { Tag, withItems } from "generics"
import { layoutBlog, stylesBlogSurfaceMain } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { markdownFilesInDir } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"
import { HeaderMegaMenu } from "src/com/HeaderMegaMenu"

const ArticleList = withItems(ArticleItem)

const pageComponents = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir(slug)

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <MobileMenuTrigger />
          <HeaderMegaMenu />
          <Tag tag="main" styles={stylesBlogSurfaceMain}>
            <ArticleList markdownItems={markdownItems} layout={layoutBlog} />
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageComponents
