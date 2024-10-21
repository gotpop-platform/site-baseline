import { AppTheme, Footer, GridGap, Heading, Metadata } from "@gotpop-platform/package-components"
import { stylesBlog, stylesBlogInner, stylesDocs, stylesDocsBody, stylesDocsNav } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { CodeBlock, parseMarkdownFile } from "@gotpop-platform/package-markdown"
import { style, title } from "@gotpop-platform/package-utilities"
import { HeaderMegaMenu } from "src/com/HeaderMegaMenu"
import { MenuSide } from "src/com/MenuSide"

const Fragment = ({ children }: { children?: JSX.Element }) => children || null

const pageComponent = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { title: pageTitle },
    htmlArray,
  } = parseMarkdownFile("src/content/components", slug)

  // console.log("htmlArray :", htmlArray)
  const finalContent = Array.from(htmlArray.entries()).map(([key, value], index) => {
    return (
      <div
        style={style({
          padding: "1rem",
          border: "1px solid #ccc",
          margin: "1rem 0",
          borderRadius: "5px",
        })}
      >
        {value.html}
      </div>
    )
  })

  const { Button } = await import("@gotpop-platform/package-components")

  return (
    <AppTheme title={title(pageTitle, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          {/* <MobileMenuTrigger /> */}
          <HeaderMegaMenu />
          <Tag tag="main" styles={stylesDocs}>
            <Tag tag="aside" class="docs-nav" styles={stylesDocsNav}>
              <Fragment>
                <MenuSide />
              </Fragment>
            </Tag>
            <Tag tag="section" class="docs-body" styles={stylesDocsBody}>
              <Fragment>
                {finalContent}
                <CodeBlock language="html">{`<Button ignore="true">Click me???????????</Button>`}</CodeBlock>
                <Button href="/">Click me!!!!!!!!!</Button>
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
