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
import { getPageMetadata, title } from "@gotpop-platform/package-utilities"
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "."

import { SITE_NAME } from "src/constants"
import { allContent } from "../../../server/serve"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

export const blockPageDocItem = async (query: Record<string, string>): Promise<JSX.Element> => {
  const { slug } = query
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
  const { htmlSectionsMap } = docItem
  const mainContent = htmlSectionsMap.get("main")
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
