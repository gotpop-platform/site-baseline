import { AppTheme } from "@layouts/app"
import { Footer } from "@components/Footer"
import { GridConfig } from "@components/GridConfig"
import { HeaderMegaMenu } from "@components/HeaderMegaMenu"
import { MobileMenuTrigger } from "@components/MobileMenuTrigger"
import { Surface } from "@components/Surface"
import jsxFactory from "@utils/jsxFactory"
import { markdownFilesInDir } from "@utils/markdown/getMarkdownFilesInDir"

type PageProps = {
  slug: string
}

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
