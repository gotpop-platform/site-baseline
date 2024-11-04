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

export const blockPageComponents = async (query: Record<string, string>): Promise<JSX.Element> => {
  const { type, slug } = query
  console.log("query :", query)

  const allComponents = allContent.get("components")
  console.log("allComponents :", allComponents)
  const allPageMetadata = getPageMetadata(allComponents)

  //  allComponents.get(type ?? "button")
  console.log('allComponents.get(type ?? "button") :', allComponents.get(type ?? "button"))

  const { pageMetadata, htmlSectionsMap } = allComponents.get(type ?? "forms").get(slug ?? "button")
  const { finalContent } = await renderComponents(htmlSectionsMap.get("main"))

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
