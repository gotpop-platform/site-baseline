import AppTheme from "@layouts/app"
import Footer from "@components/Footer"
import { Glob } from "bun"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/HeaderMegaMenu"
import MobileMenuTrigger from "@components/MobileMenuTrigger"
import { Surface } from "@components/Surface"
import { join } from "path"
import jsxFactory from "@utils/jsxFactory"
import { parseMarkdownFile } from "@utils/markdown"

type PageProps = {
  slug: string
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

    return { filePath, metadata, content }
  })

  return (
    <AppTheme title={`Gallery | ${slug}`}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <section class="blog">
            <a href="/blog/animations33">Create New Blog</a>
            <ul>
              {parsedFiles.map(
                ({ metadata, filePath }, index) => (
                  <li key={index}>
                    <article>
                      <a href={`blog/${metadata.slug}`}>
                        <h1>{metadata.title}</h1>
                        <p>
                          by {metadata.author} on{" "}
                          {metadata.date}
                        </p>
                      </a>
                    </article>
                  </li>
                )
              )}
            </ul>
          </section>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageBlog
