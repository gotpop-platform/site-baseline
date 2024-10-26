import {
  AppTheme,
  Footer,
  GridGap,
  MobileMenuTrigger,
  TableOfContents,
} from "@gotpop-platform/package-components"
import {
  layoutArticlesSlugContent,
  layoutArticlesSlugSurface,
  layoutArticlesSlugToc,
} from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { parseMarkdownFile } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"
import { HeaderMegaMenu } from "src/com/HeaderMegaMenu"

const pageArticlePage = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const { pageMetadata, htmlSectionsMap } = parseMarkdownFile("src/content/features", slug)
  const { sectionHtml, sectionTableOfContents } = htmlSectionsMap.get("main")

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <MobileMenuTrigger />
          <HeaderMegaMenu />
          <Tag tag="main" styles={layoutArticlesSlugSurface}>
            <Tag tag="aside" class="article-aside" styles={layoutArticlesSlugToc}>
              <TableOfContents toc={sectionTableOfContents} />
            </Tag>
            <Tag
              tag="section"
              class="article-body"
              styles={layoutArticlesSlugContent(pageMetadata.id)}
            >
              {sectionHtml}
            </Tag>
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageArticlePage
