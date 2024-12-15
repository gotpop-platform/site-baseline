import {
  AppTheme,
  Footer,
  GridFull,
  HeaderMegaMenu,
  MenuSide,
  Tag,
  getPageMetadata,
  jsxFactory,
  renderComponents,
  title
} from "@gotpop-platform/package-baseline"
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "../Docs/Docs.style.vars"

import { BlockDataProps } from "@gotpop-platform/types"

// import { content } from "./forms/button.md"
// console.log("content :", content)

const Fragment = ({ children }: { children?: string }) => children || null

export const blockPageComponents = async (data: BlockDataProps) => {
  const { slug } = data.query
  const defaultPath = ["components", "forms", "button"]
  const segments = slug === "components" ? defaultPath : slug?.split("/") || defaultPath

  const [root, ...rest] = segments
  const docSlug = rest.pop() || "button"
  const directories = rest

  const allDocs = data.allContent.get("Components")
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
    <AppTheme
      title={title(slug)}
      scriptPaths={data.scriptPaths}
    >
      <GridFull isRoot>
        <HeaderMegaMenu />
        <Tag tag="main" styles={stylesDocs}>
          <Tag tag="aside" class="docs-nav" styles={stylesDocsNav}>
            <>
              <MenuSide allPageMetadata={allPageMetadata} />
            </>
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
