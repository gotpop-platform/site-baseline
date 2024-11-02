import {
  AppTheme,
  Footer,
  GridGap,
  MobileMenuTrigger,
  TableOfContents,
  HeaderMegaMenu,
  Tag,
  renderComponents,
} from "@gotpop-platform/package-components"
import {
  layoutArticlesSlugContent,
  layoutArticlesSlugSurface,
  layoutArticlesSlugToc,
} from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { contentMap } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"

const pageArticlePage = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const allContent = await contentMap()
  const { pageMetadata, htmlSectionsMap } = allContent.get("features").get(slug)
  const { sectionTableOfContents } = htmlSectionsMap.get("main")
  const { finalContent } = await renderComponents(htmlSectionsMap.get("main"))

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
              {finalContent}
            </Tag>
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageArticlePage
