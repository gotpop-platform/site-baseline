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
  type MetaData,
} from "utils"

import { AppTheme } from "@components/layouts"
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

  const listBlog = parsedFiles.map(
    ({ metadata: { title, slug } }) => (
      <BlogArticle title={title} slug={slug} />
    )
  )

  return (
    <AppTheme title={`Gallery | ${slug}`}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>
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
