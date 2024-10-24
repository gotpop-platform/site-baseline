import { AppTheme, Footer, GridGap } from "@gotpop-platform/package-components"
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { CodeBlock, parseMarkdownFile } from "@gotpop-platform/package-markdown"
import { style, title } from "@gotpop-platform/package-utilities"
import { HeaderMegaMenu } from "src/com/HeaderMegaMenu"
import { MenuSide } from "src/com/MenuSide"

const Fragment = ({ children }: { children?: JSX.Element }) => children || null

type ComponentBlock = {
  language?: string
  code?: string
  component?: any
  props?: Record<string, any>
  children?: any
}

type ComponentBlocksType = Map<string, ComponentBlock> | undefined | null

async function loadComponent(componentName: string) {
  const components = {
    Button: () => import("@gotpop-platform/package-components").then((mod) => mod.Button),
    Heading: () => import("@gotpop-platform/package-components").then((mod) => mod.Heading),
    // Add other components as needed
  }

  if (componentName in components) {
    return components[componentName as keyof typeof components]()
  }

  throw new Error(`Component ${componentName} not found`)
}

async function parseBlockHtml(
  blockHtml: string = "",
  componentBlocks: ComponentBlocksType = new Map()
) {
  const codeBlockRegex = /(__CODE_BLOCK_\d+__|__SHORTCODE_\d+__)/g
  const parts = blockHtml.split(codeBlockRegex)

  const parsedParts = await Promise.all(
    parts.map(async (part, index) => {
      const match = part.match(codeBlockRegex)
      if (!match) return part

      const blockKey = match[0]
      if (!componentBlocks?.has(blockKey)) return part

      const block = componentBlocks.get(blockKey)
      if (!block) return part

      if (block.language) {
        return <CodeBlock language={block.language}>{block.code}</CodeBlock>
      }

      if (block.component) {
        try {
          const Component = await loadComponent(block.component)
          const componentProps = block.props || {}
          return <Component {...componentProps}>{block.children}</Component>
        } catch (error) {
          console.error(error)
          return part
        }
      }

      return part
    })
  )

  return parsedParts
}

const pageComponent = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const PATH = "src/content/components"
  const {
    metadata: { title: pageTitle },
    htmlArray,
  } = parseMarkdownFile(PATH, slug)

  const { html, componentBlocks } = htmlArray?.get("main") || {}
  const finalContent = await parseBlockHtml(html, componentBlocks)

  return (
    <AppTheme title={title(pageTitle, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <HeaderMegaMenu />
          <Tag tag="main" styles={stylesDocs}>
            <Tag tag="aside" class="docs-nav" styles={stylesDocsNav}>
              <Fragment>
                <MenuSide />
              </Fragment>
            </Tag>
            <Tag tag="section" class="docs-body" styles={stylesDocsBody}>
              <Fragment>
                <div
                  style={style({
                    padding: "1rem",
                    border: "1px solid #ccc",
                    margin: "1rem 0",
                    borderRadius: "5px",
                  })}
                >
                  {finalContent}
                </div>
              </Fragment>
            </Tag>
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageComponent
