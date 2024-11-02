import {
  AppTheme,
  Footer,
  GridFull,
  HeaderMegaMenu,
  MenuSide,
  Tag,
  renderComponents,
} from "@gotpop-platform/package-components"
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { allContent } from "../../../server/serve"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

const Fragment = ({ children }: { children?: JSX.Element }) => children || null

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

const pageComponent = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const { pageMetadata, htmlSectionsMap } = allContent.get("components").get(slug)
  const { finalContent } = await renderComponents(htmlSectionsMap.get("main"))

  const allPageMetadata = getPageMetadata(allContent.get("components"))
  console.log("allPageMetadata :", allPageMetadata)

  return (
    <AppTheme title={title(pageMetadata.title, SITE_NAME)}>
      <GridFull isRoot>
        <HeaderMegaMenu />
        <Tag tag="main" styles={stylesDocs}>
          <Tag tag="aside" class="docs-nav" styles={stylesDocsNav}>
            <Fragment>
              <MenuSide allPageMetadata={allPageMetadata} />
            </Fragment>
          </Tag>
          <Tag tag="section" class="docs-body" styles={stylesDocsBody}>
            {finalContent}
          </Tag>
        </Tag>
        <Footer />
      </GridFull>
    </AppTheme>
  )
}

export default pageComponent
