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
    gridColumn: "3 / span 10",
    gridRow: "2",
    backgroundColor: "cyan",
    padding: "20px",
    fontSize: "16px",
  }

  const stylesContent = {
    "--transition-article": slug,
    "view-transition-name": slug,
    gridRow: "2",
    gridColumn: "10 /  -3",
    backgroundColor: "yellow",
  }

  return (
    <AppTheme title={title(slug)}>
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
          <aside style={style(styles)}>{toccy}</aside>
          <div style={style(stylesContent)}>
            {htmlContent}
          </div>
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

export default pageArticlePage
