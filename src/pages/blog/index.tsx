import {
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"

import { AppTheme } from "@layouts/app"
import type { PageProps } from "../../types/pageProps"
import { jsxFactory } from "utils"
import { markdownFilesInDir } from "@utils/markdown/getMarkdownFilesInDir"

type MetaData = {
  slug: string
  title: string
  author: string
  date: string
}

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

const pageBlog = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const parsedFiles = await markdownFilesInDir("blog")

  const articles = parsedFiles.map(
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
        <Surface>
          <section class="blog">{articles}</section>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageBlog
