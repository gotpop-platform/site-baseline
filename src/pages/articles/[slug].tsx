import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import { jsxFactory, parseMarkdownFile, title } from "utils"

import { GenerateElement } from "src/generics/GenericGridItem"
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

  const config = layoutPages({ metadata, htmlContent, toc })

  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain>
          {config.map((item) => (
            <GenerateElement item={item} />
          ))}
        </Surface>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageArticlePage
