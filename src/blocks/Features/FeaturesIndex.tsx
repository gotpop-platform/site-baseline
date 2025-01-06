import { ArticleItem, Footer, Tag, jsxFactory, withItems } from "@gotpop-platform/package-baseline"
import { styleArticlesSurfaceMain, stylesArticlesLayout } from "../Home"

import type { BlockDataProps } from "@/types"
import { Layout } from "../Layout"

const ArticleList = withItems(ArticleItem)

export const blockPageFeaturesIndex = async ({
  query,
  allContent,
  scriptPaths,
}: BlockDataProps): Promise<any> => {
  const { slug } = query
  const allForms = allContent.get("Features")

  return (
    <Layout title={slug} scriptPaths={scriptPaths}>
      <Tag tag="main" styles={styleArticlesSurfaceMain}>
        <ArticleList markdownItems={allForms} layout={stylesArticlesLayout} />
      </Tag>
      <Footer />
    </Layout>
  )
}
