import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MenuSide,
  MobileMenuTrigger,
  Tag,
  withItems,
} from "@gotpop-platform/package-components"
import { stylesDocs, stylesDocsLayout, stylesDocsNav } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { allContent } from '../../../server/serve'
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

const ArticleList = withItems(ArticleItem)

const Fragment = ({ children }: { children?: JSX.Element }) => children || null


const pageGallery = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const allDocs = allContent.get("docs")

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <MobileMenuTrigger />
          <HeaderMegaMenu />
          <Tag tag="main" styles={stylesDocs}>
            <Tag tag="aside" class="docs-nav" styles={stylesDocsNav}>
              <Fragment>
                <MenuSide />
              </Fragment>
            </Tag>
            <ArticleList markdownItems={allDocs} layout={stylesDocsLayout} />
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageGallery
