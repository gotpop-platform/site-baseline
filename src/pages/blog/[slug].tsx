import { AppTheme, Footer, GridGap, Heading, Metadata } from "@gotpop-platform/package-components"
import { stylesBlog, stylesBlogInner } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { parseMarkdownFile } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"
import { HeaderMegaMenu } from "src/com/HeaderMegaMenu"

const pageBlog = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { date, title: pageTitle, author, id },
    content,
  } = parseMarkdownFile("blog", slug)

  return (
    <AppTheme title={title(pageTitle, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          {/* <MobileMenuTrigger /> */}
          <HeaderMegaMenu />
          <Tag tag="section" styles={stylesBlog}>
            <Tag tag="section" styles={stylesBlogInner(id)}>
              <Heading>{pageTitle}</Heading>
              <Metadata date={date} author={author} />
              {content}
            </Tag>
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageBlog
