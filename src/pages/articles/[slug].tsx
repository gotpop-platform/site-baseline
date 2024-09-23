import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import {
  jsxFactory,
  parseMarkdownFile,
  styleNames as style,
  title,
} from "utils"

import type { PageProps } from "types"

const styles = {
  gridColumn: "1 / span 7",
  backgroundColor: "cyan",
  padding: "20px",
  fontSize: "16px",
}

const stylesContent = (slug: string) => ({
  "--transition-article": slug,
  gridColumn: "10 /  -1",
  backgroundColor: "yellow",
})

const TableOfContents = ({
  toc,
}: {
  toc: { id: string; text: string }[]
}) => (
  <aside style={style(styles)}>
    <nav>
      <ul>
        {toc.map(({ id, text }) => (
          <li>
            <a href={"#" + id}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)

const pageArticlePage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { date, author },
    content: htmlContent,
    toc,
  } = parseMarkdownFile("articles", slug)

  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain hasInner>
          <TableOfContents toc={toc} />
          <div style={style(stylesContent(slug))}>
            {htmlContent}
          </div>
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageArticlePage
