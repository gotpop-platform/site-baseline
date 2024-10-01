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

import type { PageProps } from "types"
import { Tag } from "generics"

const pageArticlePage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const { content, toc, metadata } = parseMarkdownFile(
    "articles",
    slug
  )

  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={layoutArticlesSlugSurface}>
          <Tag tag="aside" styles={layoutArticlesSlugToc}>
            <TableOfContents toc={toc} />
          </Tag>
          <Tag
            tag="section"
            styles={layoutArticlesSlugContent(metadata.id)}
          >
            {content}
          </Tag>
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageArticlePage
