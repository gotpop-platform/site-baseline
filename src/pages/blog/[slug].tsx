import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  Heading,
  MobileMenuTrigger,
} from "components"
import { jsxFactory, parseMarkdownFile, title } from "utils"
import { stylesBlog, stylesBlogInner } from "variables"

import { Metadata } from "src/components/Metadata"
import type { PageProps } from "types"
import { Tag } from "generics"

const pageBlog = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { date, title: pageTitle, author, id },
    content,
  } = parseMarkdownFile("blog", slug)

  return (
    <AppTheme title={title(pageTitle)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
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
