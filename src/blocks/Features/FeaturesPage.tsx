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
import { layoutArticlesSlugContent, layoutArticlesSlugSurface, layoutArticlesSlugToc } from "."

import { BlockDataProps } from "src/types/types"
import { contentMap } from "@gotpop-platform/package-markdown"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

export const blockPageFeaturePage = async (data: BlockDataProps): Promise<JSX.Element> => {
  const { slug } = data.query
  const [root, pageSlug] = slug.split("/")

  const allContent = await contentMap()
  const { pageMetadata, htmlSectionsMap } = allContent.get(root).get(pageSlug)
  const { sectionTableOfContents } = htmlSectionsMap.get("main")
  const { finalContent } = await renderComponents(htmlSectionsMap.get("main"))

  return (
    <AppTheme title={title(slug, data.Config.APP.SITE_NAME)} scriptPaths={data.scriptPaths}>
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
