import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import {
  formattedDate,
  jsxFactory,
  parseMarkdownFile,
  style,
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
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu
          style={style({
            gridColumn: "center",
            "--grid-column": "center",
          })}
        />
        <Surface
          isMain
          style={style({
            gridColumn: "center",
          })}
        >
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
        <Footer
          style={style({
            gridColumn: "center",
            "--grid-column": "center",
          })}
        />
      </GridGap>
    </AppTheme>
  )
}

export default pageBlog
