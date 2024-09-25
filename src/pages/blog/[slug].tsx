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

import { GenerateElement } from "generics"
import { Metadata } from "src/components/Metadata"
import type { PageProps } from "types"

const pageBlog = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { date, title: pageTitle, author },
    content,
  } = parseMarkdownFile("blog", slug)

  return (
    <AppTheme title={title(pageTitle)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <GenerateElement tag="section" styles={stylesBlog}>
          <GenerateElement
            tag="section"
            styles={stylesBlogInner}
          >
            <Heading>{pageTitle}</Heading>
            <Metadata date={date} author={author} />
            {content}
          </GenerateElement>
        </GenerateElement>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageBlog
