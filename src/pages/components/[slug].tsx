import {
  AppTheme,
  Button,
  Footer,
  GridGap,
  Heading,
  Metadata,
} from "@gotpop-platform/package-components"
import { stylesBlog, stylesBlogInner, stylesDocs, stylesDocsBody, stylesDocsNav } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import {
  CodeBlock,
  ComponentBlocksType,
  parseMarkdownFile,
} from "@gotpop-platform/package-markdown"
import { style, title } from "@gotpop-platform/package-utilities"
import { HeaderMegaMenu } from "src/com/HeaderMegaMenu"
import { MenuSide } from "src/com/MenuSide"

const Fragment = ({ children }: { children?: JSX.Element }) => children || null

function parseBlockHtml(blockHtml: string = "", componentBlocks: ComponentBlocksType = new Map()) {
  const codeBlockRegex = /(__CODE_BLOCK_\d+__|__SHORTCODE_\d+__)/g
  const parts = blockHtml.split(codeBlockRegex)

  return parts.map((part, index) => {
    const match = part.match(codeBlockRegex)
    if (!match) return part

    const blockKey = match[0] // This will be the full match like "__CODE_BLOCK_0__" or "__SHORTCODE_0__"
    if (!componentBlocks?.has(blockKey)) return part

    const block = componentBlocks.get(blockKey)
    if (!block) return part

    if (block.language) {
      // Handle code blocks
      return (
        <CodeBlock key={index} language={block.language}>
          {block.code}
        </CodeBlock>
      )
    }

    if (block.component) {
      // Handle shortcodes
      const Component = block.component === "Button" ? Button : null // Add more components as needed
      if (Component) {
        return (
          <Component key={index} {...block.props}>
            {block.children}
          </Component>
        )
      }
    }

    return part
  })
}

const pageComponent = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { title: pageTitle },
    htmlArray,
  } = parseMarkdownFile("src/content/components", slug)
  console.log("htmlArray :", htmlArray)

  const { html, componentBlocks } = htmlArray?.get("main") || {}
  // const { Button } = await import("@gotpop-platform/package-components")
  const finalContent = parseBlockHtml(html, componentBlocks)

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
