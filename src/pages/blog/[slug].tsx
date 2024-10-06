import { AppTheme, Footer, GridGap, HeaderMegaMenu, Heading } from "components"
import { parseMarkdownFile, title } from "utils"
import { stylesBlog, stylesBlogInner } from "variables"

import { Metadata } from "src/components/Metadata"
import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "utils"

const pageBlog = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { date, title: pageTitle, author, id },
    content,
  } = parseMarkdownFile("blog", slug)

  return (
    <AppTheme title={title(pageTitle, SITE_NAME)}>
      <GridGap isRoot>
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
      </GridGap>
    </AppTheme>
  )
}

export default pageBlog
