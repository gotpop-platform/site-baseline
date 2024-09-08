import AppTheme from "@layouts/app"
import Footer from "@components/Footer"
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

const filePath = join(import.meta.dir, "test.md")
console.log("filePath :", filePath)

// Parse the Markdown file
const { metadata, content: htmlContent } =
  parseMarkdownFile(filePath)

const pageBlog = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={`Gallery | ${slug}`}>
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <section class="blog">
            <h1>{metadata.title}</h1>
            <p>
              By {metadata.author} on {metadata.date}
            </p>
            {htmlContent}
          </section>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageBlog
