import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
} from "components"
import { GenerateElement, withItems } from "generics"
import {
  jsxFactory,
  markdownFilesInDir,
  title,
} from "utils"
import {
  layoutArticlesSlugSurface,
  stylesLayout,
} from "src/variables"

import type { PageProps } from "types"

const ArticleList = withItems(ArticleItem)

const pageGallery = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir(slug)

  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <GenerateElement
          tag="main"
          styles={layoutArticlesSlugSurface}
        >
          <ArticleList
            markdownItems={markdownItems}
            layout={stylesLayout}
          />
        </GenerateElement>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageGallery
