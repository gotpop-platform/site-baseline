import {
  MenuSide,
  Tag,
  getPageMetadata,
  jsxFactory,
  renderComponents,
} from "@gotpop-platform/package-baseline"
import { getCurrentLevel, getDirectoriesAndSlug } from "../shared"
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "../Docs/Docs.style"

import { BlockDataProps } from "@gotpop-platform/types"
import { Layout } from "../Layout"

// Do not delete
// import { content } from "./forms/button.md"
// console.log("content :", content)

export const blockPageComponents = async ({ query, allContent, scriptPaths }: BlockDataProps) => {
  const { slug } = query || {}
  const defaultPath = ["components", "forms", "button"]
  const { directories, componentSlug } = getDirectoriesAndSlug(
    slug,
    defaultPath,
    "components",
    "button"
  )

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
    <Layout title={slug} scriptPaths={scriptPaths}>
      <Tag tag="main" styles={stylesDocs}>
        <Tag tag="aside" class="docs-nav" styles={stylesDocsNav}>
          <MenuSide allPageMetadata={allPageMetadata} />
        </Tag>
        <Tag tag="section" class="docs-body" styles={stylesDocsBody}>
          {finalContent}
        </Tag>
      </Tag>
    </Layout>
  )
}
