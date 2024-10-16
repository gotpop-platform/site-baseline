import { AppTheme, Footer, GridGap, Heading, Metadata } from "@gotpop-platform/package-components"
import { stylesBlog, stylesBlogInner, stylesDocs, stylesDocsBody, stylesDocsNav } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { CodeBlock, parseMarkdownFile } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"
import { HeaderMegaMenu } from "src/com/HeaderMegaMenu"
import { MenuSide } from "src/com/MenuSide"
import Button from "@gotpop-platform/package-components/src/components/forms/Button"

const Fragment = ({ children }: { children?: JSX.Element }) => children || null

const pageComponent = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { date, title: pageTitle, author, id },
    content,
  } = parseMarkdownFile("components", slug)

  const escapeHtml = (unsafe: string) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
  }

  const jsxCode = `<Button ignore="true">Click me!!!!!!!!!</Button>`
  const escapedCode = escapeHtml(jsxCode)

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
            {/* <ArticleList markdownItems={markdownItems} layout={stylesDocsLayout} /> */}
            <Tag tag="section" class="docs-body" styles={stylesDocsBody}>
              <Fragment>
                {content}
                <CodeBlock>{escapedCode}</CodeBlock>
              </Fragment>
            </Tag>
          </Tag>
          {/* <Tag tag="section" styles={stylesBlog}>
            <Tag tag="section" class="section-blog" styles={stylesBlogInner(id)}>
              <Heading>{pageTitle}</Heading>
              <Metadata date={date} author={author} />
              {content}
            </Tag>
          </Tag> */}
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageComponent
