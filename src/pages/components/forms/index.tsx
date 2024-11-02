import {
  AppTheme,
  ArticleItem,
  Footer,
  MobileMenuTrigger,
  HeaderMegaMenu,
  Tag,
  withItems,
  GridFull,
} from "@gotpop-platform/package-components"
import { layoutBlog, stylesBlogSurfaceMain } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { contentMap, parseMarkdownFiles } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"

const ArticleList = withItems(ArticleItem)

const pageComponents = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const allContent = await contentMap()
  const allForms = allContent.get("components").get("forms")

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridFull isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={stylesBlogSurfaceMain}>
          <ArticleList markdownItems={allForms} layout={layoutBlog} />
        </Tag>
        <Footer />
      </GridFull>
    </AppTheme>
  )
}

export default pageComponents