import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, parseMarkdownFile, title } from "utils"
import {
  layoutArticlesSlugContent,
  layoutArticlesSlugToc,
} from "src/layouts"

import { GenerateElement } from "src/generics/GenericGridItem"
import type { PageProps } from "types"
import { TableOfContents } from "src/components/TableOfContents"

const pageArticlePage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const {
    metadata,
    content: htmlContent,
    toc,
  } = parseMarkdownFile("articles", slug)

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
            {htmlContent}
          </GenerateElement>
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageArticlePage
