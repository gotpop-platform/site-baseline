import {
  AppTheme,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import {
  jsxFactory,
  markdownFilesInDir,
  style,
  title,
  type MetaData,
} from "utils"

import type { PageProps } from "types"

const BlogArticle = ({
  metadata: { title, slug },
}: {
  metadata: MetaData | Record<string, string>
}) => (
  <article>
    <a href={`gallery/${slug}`}>
      <h1>{title}</h1>
    </a>
  </article>
)

const pageGallery = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const parsedFiles = await markdownFilesInDir(slug)

  const listBlog = parsedFiles.map(({ metadata }) => (
    <BlogArticle metadata={metadata} />
  ))

  return (
    <AppTheme title={title(slug)}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain>
          <section
            style={style({
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
