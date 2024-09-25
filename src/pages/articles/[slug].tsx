import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  TableOfContents,
} from "components"
import { jsxFactory, parseMarkdownFile, title } from "utils"
import {
  layoutArticlesSlugContent,
  layoutArticlesSlugSurface,
  layoutArticlesSlugToc,
} from "variables"

import { GenerateElement } from "generics"
import type { PageProps } from "types"

const pageArticlePage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const { content, toc } = parseMarkdownFile(
    "articles",
    slug
  )

  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <GenerateElement
          tag="main"
          styles={layoutArticlesSlugSurface}
        >
          <GenerateElement
            tag="aside"
            styles={layoutArticlesSlugToc}
          >
            <TableOfContents toc={toc} />
          </GenerateElement>
          <GenerateElement
            tag="section"
            styles={layoutArticlesSlugContent}
          >
            {content}
          </GenerateElement>
        </GenerateElement>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageArticlePage
