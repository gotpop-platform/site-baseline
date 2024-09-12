import {
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"

import { AppTheme } from "@layouts/app"
import type { PageProps } from "../../types/pageProps"
import jsxFactory from "@utils/jsxFactory"
import { parseMarkdownFile } from "@utils/markdown"

export const formattedDate = (
  date: string | number | Date
) =>
  new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

const pageBlog = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { date, title, author },
    content: htmlContent,
  } = parseMarkdownFile("blog", slug)

  return (
    <AppTheme title={`Baseline | ${title}`}>
      <GridConfig>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>
          <section class="blog">
            <h1>{title}</h1>
            <aside>
              <span>By</span>
              <address>{author}</address>
              <span>on</span>
              <time dateTime={date}>{formattedDate}</time>
            </aside>
            {htmlContent}
          </section>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageBlog
