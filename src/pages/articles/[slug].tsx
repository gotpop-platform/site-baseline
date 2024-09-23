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
  title
} from "utils"

import { PageItems } from "src/generics/GenericGridItem"
import { layoutPages } from "src/layouts"
import type { PageProps } from "types"

const pageArticlePage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const {
    metadata,
    content: htmlContent,
    toc,
  } = parseMarkdownFile("articles", slug)

  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain>
          <PageItems
            config={layoutPages({ metadata, htmlContent, toc })}
          />
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageArticlePage
