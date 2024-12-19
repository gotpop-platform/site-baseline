import {
  MenuSide,
  Tag,
  getPageMetadata,
  jsxFactory,
  renderComponents,
} from "@gotpop-platform/package-baseline"
import { getCurrentLevel, getDirectoriesAndSlug } from "../shared"
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "."

import { BlockDataProps } from "@gotpop-platform/types"
import { Layout } from "../Layout"

export const blockPageDocItem = async ({ allContent, query, scriptPaths }: BlockDataProps) => {
  const { slug } = query || {}
  const defaultPath = ["docs", "getting-started", "getting-started"]
  const { directories, componentSlug } = getDirectoriesAndSlug(
    slug,
    defaultPath,
    "docs",
    "getting-started"
  )

  const allDocs = allContent.get("Docs")
  const allPageMetadata = getPageMetadata(allDocs)
  const currentLevel = getCurrentLevel(allDocs, directories)

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
