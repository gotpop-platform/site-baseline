import {
  ArticleItems,
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
    <a href={`blog/${slug}`}>
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

  const articles = parsedFiles.map(
    ({ metadata: { title, slug, author, date } }) => (
      <ArticleItem title={title} slug={slug} date={date} />
    )
  )
  return (
    <AppTheme title={`Articles | ${slug}`}>
      <GridConfig>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>
          <ArticleItems />
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticles
