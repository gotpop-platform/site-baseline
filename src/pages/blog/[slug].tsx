import {
  AppTheme,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import {
  formattedDate,
  jsxFactory,
  parseMarkdownFile,
  title,
} from "utils"

import type { PageProps } from "types"

const pageBlog = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { date, title: pageTitle, author },
    content: htmlContent,
  } = parseMarkdownFile("blog", slug)

  return (
    <AppTheme title={title(pageTitle)}>
      <GridConfig>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain>
          <section class="blog">
            <h1>{pageTitle}</h1>
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
