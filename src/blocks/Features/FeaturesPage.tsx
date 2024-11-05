import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  TableOfContents,
  Tag,
  renderComponents,
} from "@gotpop-platform/package-components"
import {
  layoutArticlesSlugContent,
  layoutArticlesSlugSurface,
  layoutArticlesSlugToc,
} from "variables"

import { SITE_NAME } from "src/constants"
import { contentMap } from "@gotpop-platform/package-markdown"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

export const blockPageFeaturePage = async (query: Record<string, string>): Promise<JSX.Element> => {
  const { slug } = query
  const [root, pageSlug] = slug.split("/")

  const allContent = await contentMap()
  const { pageMetadata, htmlSectionsMap } = allContent.get(root).get(pageSlug)
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
