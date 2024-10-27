import {
  AppTheme,
  MenuSide,
  Footer,
  GridGap,
  MobileMenuTrigger,
  HeaderMegaMenu,
} from "@gotpop-platform/package-components"
import { Tag, withItems } from "generics"
import { stylesDocs, stylesDocsBody, stylesDocsLayout, stylesDocsNav } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { parseMarkdownFile } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"

// const ArticleList = withItems(ArticleItem)

const Fragment = ({ children }: { children?: JSX.Element }) => children || null

const pageGallery = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const { htmlSectionsMap } = parseMarkdownFile("src/content/docs", "getting-started")
  console.log("htmlSectionsMap :", htmlSectionsMap)
  const mainHtml = htmlSectionsMap.get("main")

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
            {/* <ArticleList markdownItems={markdownItems} layout={stylesDocsLayout} /> */}
            <Tag tag="section" class="docs-body" styles={stylesDocsBody}>
              <Fragment>{mainHtml?.html}</Fragment>
            </Tag>
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageGallery
