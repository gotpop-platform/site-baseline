import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MenuSide,
  MobileMenuTrigger,
  Tag,
  getPageMetadata,
  jsxFactory,
  renderComponents,
} from "@gotpop-platform/package-baseline"
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "."

import { BlockDataProps } from "@gotpop-platform/types"

export const blockPageDocItem = async ({ allContent, query, scriptPaths }: BlockDataProps) => {
  const { slug } = query
  const defaultPath = ["docs", "getting-started", "getting-started"]
  const segments = slug === "docs" ? defaultPath : slug?.split("/") || defaultPath

  const [root, ...rest] = segments
  const docSlug = rest.pop() || "getting-started"
  const directories = rest

  const allDocs = allContent.get("Docs")
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
    <AppTheme title={slug} scriptPaths={scriptPaths}>
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
