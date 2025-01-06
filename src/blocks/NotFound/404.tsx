import { Tag, jsxFactory, title } from "@gotpop-platform/package-baseline"
import { layoutArticlesSlugSurface, stylesBlog } from ".."

import type { BlockDataProps } from "@/types"
import { Layout } from "../Layout" // Import Layout component

export const blockNotFoundPage = async (data: BlockDataProps): Promise<any> => {
  return (
    <Layout title={title("Page Not Found")} scriptPaths={data.scriptPaths}>
      <Tag tag="main" styles={layoutArticlesSlugSurface}>
        <Tag tag="section" styles={stylesBlog}>
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </Tag>
      </Tag>
    </Layout>
  )
}
