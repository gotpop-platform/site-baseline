import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
  TableOfContents,
} from "components"
import { jsxFactory, parseMarkdownFile, title } from "utils"
import {
  layoutArticlesSlugContent,
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
        <Surface isMain>
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
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageArticlePage
