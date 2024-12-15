import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  TableOfContents,
  Tag,
  jsxFactory,
  renderComponents,
  title
} from "@gotpop-platform/package-baseline"
import { layoutArticlesSlugContent, layoutArticlesSlugSurface, layoutArticlesSlugToc } from "."

import { BlockDataProps } from "@gotpop-platform/types"

export const blockPageFeaturePage = async ({
  allContent,
  query,
  scriptPaths,
}: BlockDataProps): Promise<string> => {
  const { slug } = query
  const [root, pageSlug] = slug.split("/")

  const { pageMetadata, htmlSectionsMap } = allContent.get("Features").get(pageSlug)
  const { sectionTableOfContents } = htmlSectionsMap.get("main")
  const { finalContent } = await renderComponents(htmlSectionsMap.get("main"))

  return (
    <AppTheme
      title={title(slug)}
      scriptPaths={scriptPaths}
    >
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
