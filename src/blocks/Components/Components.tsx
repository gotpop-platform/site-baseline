import {
  AppTheme,
  Footer,
  GridFull,
  HeaderMegaMenu,
  MenuSide,
  Tag,
  renderComponents,
} from "@gotpop-platform/package-components"
import { getPageMetadata, title } from "@gotpop-platform/package-utilities"
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "../Docs/Docs.style.vars"

import { SITE_NAME } from "src/constants"
import { allContent } from "../../../serve"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

const Fragment = ({ children }: { children?: JSX.Element }) => children || null

export const blockPageComponents = async (data: {
  query: { slug: any }
  scriptPaths: Record<string, string>[]
}): Promise<JSX.Element> => {
  console.log("data :", data)

  const { slug } = data.query
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
  const { pageMetadata, htmlSectionsMap } = docItem
  const mainContent = htmlSectionsMap.get("main")
  const { finalContent } = await renderComponents(mainContent)

  return (
    <AppTheme title={title(slug, SITE_NAME)} scriptPaths={data.scriptPaths}>
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
