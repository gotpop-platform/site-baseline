import { jsxFactory, markdownFilesInDir, title } from "@gotpop-platform/utils"
import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
} from "components"
import { Tag, withItems } from "generics"
import { stylesGallery, stylesGalleryLayout } from "variables"

import { SITE_NAME } from "src/constants"
import type { PageProps } from "types"

const ArticleList = withItems(ArticleItem)

const pageGallery = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir(slug)

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={stylesGallery}>
          <ArticleList markdownItems={markdownItems} layout={stylesGalleryLayout} />
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageGallery
