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
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "variables"

import { SITE_NAME } from "src/constants"
import { allContent } from "../../../server/serve"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

// import { title } from "@gotpop-platform/package-utilities"

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

export const blockPageDocItem = async (query: Record<string, string>): Promise<JSX.Element> => {
  const { slug } = query

  // Handle root level 'docs' path
  const defaultPath = ["docs", "getting-started", "getting-started"]
  const segments = slug === "docs" ? defaultPath : slug?.split("/") || defaultPath

  const [root, ...rest] = segments
  const docSlug = rest.pop() || "getting-started"
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

  const { htmlSectionsMap } = docItem
  const mainContent = htmlSectionsMap.get("main")

  if (!mainContent) {
    throw new Error(`No main content found in htmlSectionsMap for "${docSlug}"`)
  }

  const { finalContent } = await renderComponents(mainContent)

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
