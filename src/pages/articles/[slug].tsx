import {
  AppTheme,
  Footer,
  GridConfig,
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

const pageArticlePage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { date, author },
    content: htmlContent,
    toc,
  } = parseMarkdownFile("articles", slug)

  const toccy = (
    <nav>
      <ul>
        {toc.map(({ id, text }) => (
          <li>
            <a href={"#" + id}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )

  const styles = {
    "--liam": "10px",
    gridColumn: "1 / span 2",
    backgroundColor: "white",
    padding: "20px",
    fontSize: "16px",
  }

  const stylesContent = {
    "--transition-article": slug,
    "view-transition-name": slug,
    gridColumn: "3 / span 10",
    backgroundColor: "yellow",
  }

  return (
    <AppTheme title={title(slug)}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain hasInner>
          <aside style={style(styles)}>{toccy}</aside>
          <div style={style(stylesContent)}>
            {htmlContent}
          </div>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticlePage
