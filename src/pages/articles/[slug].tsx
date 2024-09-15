import {
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
} from "utils"

import { AppTheme } from "@components/layouts"
import type { PageProps } from "types"

const pageArticlePage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const {
    metadata: { date, title, author },
    content: htmlContent,
    toc,
  } = parseMarkdownFile("articles", slug)

  // console.log("toc :", toc)

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
    <AppTheme title={`Baseline | ${slug}`}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface>
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
