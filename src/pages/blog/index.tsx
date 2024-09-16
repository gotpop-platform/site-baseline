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
  metadata: { title, author, date, slug },
}: {
  metadata: MetaData | Record<string, string>
}) => (
  <article
    style={style({
      gridColumn: "1 / span 12",
    })}
  >
    <a href={`blog/${slug}`}>
      <h1>{title}</h1>
      <p>
        by {author} on {date}
      </p>
    </a>
  </article>
)

const pageBlog = async ({
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
        <Surface isMain hasInner>
          {listBlog}
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageBlog
