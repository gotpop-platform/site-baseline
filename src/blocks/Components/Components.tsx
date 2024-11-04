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
  const { slug } = query

  // Handle root level 'docs' path
  const defaultPath = ["components", "forms", "button"]
  const segments = slug === "components" ? defaultPath : slug?.split("/") || defaultPath

  const [root, ...rest] = segments
  const docSlug = rest.pop() || "button"
  const directories = rest

  const allDocs = allContent.get(root)
  const allPageMetadata = getPageMetadata(allDocs)

  let currentLevel = allDocs
  for (const dir of directories) {
    currentLevel = currentLevel?.get(dir)
    if (!currentLevel) {
      throw new Error(`Directory "${dir}" not found`)
    }
  }

  const docItem = currentLevel.get(docSlug)
  if (!docItem) {
    throw new Error(`Document "${docSlug}" not found in path ${directories.join("/")}`)
  }

  console.log("docItem structure:", JSON.stringify(docItem, null, 2))

  if (!docItem.htmlSectionsMap) {
    throw new Error(`No htmlSectionsMap found for document "${docSlug}"`)
  }

  const { pageMetadata, htmlSectionsMap } = docItem
  const mainContent = htmlSectionsMap.get("main")

  if (!mainContent) {
    throw new Error(`No main content found in htmlSectionsMap for "${docSlug}"`)
  }

  const { finalContent } = await renderComponents(mainContent)

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
