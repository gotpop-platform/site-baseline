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
  title,
} from "@gotpop-platform/package-baseline"
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "../Docs/Docs.style.vars"

import { BlockDataProps } from "@gotpop-platform/types"

// Do not delete
// import { content } from "./forms/button.md"
// console.log("content :", content)

const getDirectoriesAndSlug = (slug: string | undefined, defaultPath: string[]) => {
  const segments = slug === "components" ? defaultPath : slug?.split("/") || defaultPath
  const [root, ...rest] = segments
  const componentSlug = rest.pop() || "button"

  return { directories: rest, componentSlug }
}

const getCurrentLevel = (allComponents: Map<string, any>, directories: string[]) => {
  let currentLevel: Map<string, any> | undefined = allComponents

  for (const dir of directories) {
    currentLevel = currentLevel.get(dir)

    if (!currentLevel) {
      throw new Error(`Directory "${dir}" not found`)
    }
  }

  return currentLevel
}

export const blockPageComponents = async ({ query, allContent, scriptPaths }: BlockDataProps) => {
  const { slug } = query || {}
  const defaultPath = ["components", "forms", "button"]
  const { directories, componentSlug } = getDirectoriesAndSlug(slug, defaultPath)
  const allComponents = allContent.get("Components")

  if (!allComponents) {
    throw new Error("Components documentation not found")
  }

  const allPageMetadata = getPageMetadata(allComponents)
  const currentLevel = getCurrentLevel(allComponents, directories)

  if (!currentLevel.get(componentSlug)) {
    throw new Error(`Document "${componentSlug}" not found in directory "${directories.join("/")}"`)
  }

  const { htmlSectionsMap } = currentLevel.get(componentSlug)
  const mainContent = htmlSectionsMap.get("main")
  const { finalContent } = await renderComponents(mainContent)

  return (
    <AppTheme title={title(slug)} scriptPaths={scriptPaths}>
      <GridFull isRoot>
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
      </GridFull>
    </AppTheme>
  )
}
