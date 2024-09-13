import {
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { formattedDate, parseMarkdownFile } from "utils"

import { AppTheme } from "@layouts/app"
import type { PageProps } from "../../types/pageProps"
import jsxFactory from "@utils/jsxFactory"

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
              <small>
                <span>By</span>
                <address>{author}</address>
                <span>on</span>
              </small>
              <time dateTime={date}>
                {formattedDate(date)}
              </time>
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
