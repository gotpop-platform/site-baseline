import {
  TableOfContents,
  Tag,
  jsxFactory,
  renderComponents,
} from "@gotpop-platform/package-baseline"
import { layoutArticlesSlugContent, layoutArticlesSlugSurface, layoutArticlesSlugToc } from "."

import { BlockDataProps } from "@gotpop-platform/types"
import { Layout } from "../Layout"

export const blockPageFeaturePage = async ({
  allContent,
  query,
  scriptPaths,
}: BlockDataProps): Promise<any> => {
  const { slug } = query
  const [root, pageSlug] = slug.split("/")

  const { pageMetadata, htmlSectionsMap } = allContent.get("Features").get(pageSlug)
  const { sectionTableOfContents } = htmlSectionsMap.get("main")
  const { finalContent } = await renderComponents(htmlSectionsMap.get("main"))

  return (
    <Layout title={slug} scriptPaths={scriptPaths}>
      <Tag tag="main" styles={layoutArticlesSlugSurface}>
        <Tag tag="aside" class="article-aside" styles={layoutArticlesSlugToc}>
          <TableOfContents toc={sectionTableOfContents} />
        </Tag>
        <Tag tag="section" class="article-body" styles={layoutArticlesSlugContent(pageMetadata.id)}>
          {finalContent}
        </Tag>
      </Tag>
    </Layout>
  )
}
