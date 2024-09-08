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

  for await (const file of glob.scan(import.meta.dir)) {
    markdownFiles.push(file)
  }

  const parsedFiles = markdownFiles.map((filePath) => {
    const fullFilePath = join(import.meta.dir, filePath)

    const { metadata, content } =
      parseMarkdownFile(fullFilePath)

    return { filePath, metadata, content }
  })

  return (
    <AppTheme title={`Gallery | ${slug}`}>
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <section class="blog">
            <a href="/blog/animations33">Create New Blog</a>
            <ul>
              {parsedFiles.map(
                ({ metadata, filePath }, index) => (
                  <li key={index}>
                    <a href={`blog/${metadata.slug}`}>
                      {metadata.title} by {metadata.author}{" "}
                      on {metadata.date}
                    </a>
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
