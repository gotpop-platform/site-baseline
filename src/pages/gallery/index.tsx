import {
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import {
  jsxFactory,
  markdownFilesInDir,
  styleNames,
  title,
  type MetaData,
} from "utils"

import { AppTheme } from "components"
import type { PageProps } from "types"

const BlogArticle = ({
  title,
  slug,
}: Omit<MetaData, "description">) => (
  <article>
    <a href={`gallery/${slug}`}>
      <h1>{title}</h1>
    </a>
  </article>
)

const pageGallery = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const parsedFiles = await markdownFilesInDir("gallery")
  // console.log("parsedFiles :", parsedFiles)
  console.log("slug :", slug)

  const listBlog = parsedFiles.map(
    ({ metadata: { title, slug } }) => (
      <BlogArticle title={title} slug={slug} />
    )
  )

  return (
    <AppTheme title={title(slug)}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain>
          <section
            style={styleNames({
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
            })}
          >
            {listBlog}
          </section>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageGallery
