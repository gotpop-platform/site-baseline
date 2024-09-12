import AppTheme from "@layouts/app"
import { Footer } from "@components/Footer"
import { Glob } from "bun"
import { GridConfig } from "@components/GridConfig"
import { HeaderMegaMenu } from "@components/HeaderMegaMenu"
import { MobileMenuTrigger } from "@components/MobileMenuTrigger"
import { Surface } from "@components/Surface"
import { join } from "path"
import jsxFactory from "@utils/jsxFactory"
import { parseMarkdownFile } from "@utils/markdown"

type PageProps = {
  slug: string
}

type MetaData = {
  slug: string
  title: string
  author: string
  date: string
}

const pageBlog = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const glob = new Glob("**/*.md")
  const markdownFiles: string[] = []

  const contentDir = join(process.cwd(), "src/content/blog")

  for await (const file of glob.scan(contentDir)) {
    markdownFiles.push(file)
  }

  const parsedFiles = markdownFiles.map((filePath) => {
    const fullFilePath = join(contentDir, filePath)

    const { metadata, content } =
      parseMarkdownFile(fullFilePath)

    return { metadata, content }
  })

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
