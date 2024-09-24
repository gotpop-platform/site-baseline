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
  title,
} from "utils"

import { GenerateElement } from "src/generics/GenericGridItem"
import type { PageProps } from "types"
import { stylesBlog } from "src/layouts/layoutBlog"

const Metadata = ({
  date,
  author,
}: {
  date: string
  author: string
}) => (
  <aside>
    <small>
      <span>By</span>
      <address>{author}</address>
      <span>on</span>
    </small>
    <time dateTime={date}>{formattedDate(date)}</time>
  </aside>
)

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
        <HeaderMegaMenu />
        <Surface isMain>
          <GenerateElement
            tag="section"
            styles={stylesBlog}
          >
            <h1>{pageTitle}</h1>
            <Metadata date={date} author={author} />
            {htmlContent}
          </GenerateElement>
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageBlog
