import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  TableOfContents,
  Tag,
  renderComponents,
} from "@gotpop-platform/package-baseline"
import { layoutArticlesSlugContent, layoutArticlesSlugSurface, layoutArticlesSlugToc } from "."

import { BlockDataProps } from "@gotpop-platform/types"
import { jsxFactory } from "@gotpop-platform/package-baseline"
import { title } from "@gotpop-platform/package-baseline"

export const blockPageFeaturePage = async (data: BlockDataProps): Promise<string> => {
  const { env } = process
  const { slug } = data.query
  const [root, pageSlug] = slug.split("/")

  const { pageMetadata, htmlSectionsMap } = data.allContent.get("Features").get(pageSlug)
  const { sectionTableOfContents } = htmlSectionsMap.get("main")
  const { finalContent } = await renderComponents(htmlSectionsMap.get("main"))

  return (
    <AppTheme
      title={title(slug, env.npm_package_config_app_site_name || "GotPop")}
      scriptPaths={data.scriptPaths}
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
