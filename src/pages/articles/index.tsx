import {
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"

import { AppTheme } from "layouts"
import type { PageProps } from "types"
import {
  jsxFactory,
  markdownFilesInDir,
  type MetaData,
} from "utils"

const BlogArticle = ({
  title,
  slug,
  author,
  date,
}: MetaData) => (
  <article>
    <a href={`articles/${slug}`}>
      <h1>{title}</h1>
      <p>
        by {author} on {date}
      </p>
    </a>
  </article>
)

const pageArticles = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const parsedFiles = await markdownFilesInDir("articles")

  const listArticles = parsedFiles.map(
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
    <AppTheme title="Baseline | Articles">
      <GridConfig>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>
          <section>{listArticles}</section>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticles
