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
  type MetaData,
} from "utils"

import { AppTheme } from "components"
import type { PageProps } from "types"

const BlogArticle = ({
  title,
  slug,
  author,
  date,
}: Omit<MetaData, "description">) => (
  <article>
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
  const parsedFiles = await markdownFilesInDir("blog")

  const listBlog = parsedFiles.map(
    ({ metadata: { title, slug, author, date } }) => (
      <BlogArticle
        title={title}
        slug={slug}
        author={author}
        date={date}
      />
    )
  )

  return (
    <AppTheme title="Baseline | Blog">
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain>
          <section class="blog">{listBlog}</section>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageBlog
