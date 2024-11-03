import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MenuSide,
  MobileMenuTrigger,
  Tag,
  renderComponents,
} from "@gotpop-platform/package-components"
import { layoutArticlesSlugSurface, stylesDocs, stylesDocsBody, stylesDocsNav } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { allContent } from "../../../server/serve"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

const getPageMetadata = (map: Map<string, any>): Map<string, any> => {
  const result = new Map<string, any>()

  for (const [key, value] of map.entries()) {
    if (value.pageMetadata) {
      result.set(key, value.pageMetadata)
    }

    if (value instanceof Map) {
      result.set(key, getPageMetadata(value))
    }
  }

  return result
}

const pageDocItem = async ({ slug }: PageProps): Promise<JSX.Element> => {
  console.log("slug :", slug)
  const allDocs = allContent.get("docs")
  const allPageMetadata = getPageMetadata(allDocs)

  const { htmlSectionsMap } = allDocs.get("getting-started").get(slug)
  const { finalContent } = await renderComponents(htmlSectionsMap.get("main"))

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <MobileMenuTrigger />
          <HeaderMegaMenu />
          <Tag tag="main" styles={stylesDocs}>
            <Tag tag="aside" class="docs-nav" styles={stylesDocsNav}>
              <MenuSide allPageMetadata={allPageMetadata} />
            </Tag>
            <Tag tag="section" class="docs-body" styles={stylesDocsBody}>
              {finalContent}
            </Tag>
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageDocItem
