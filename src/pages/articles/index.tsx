import {
  AppTheme,
  ArticleItem,
  Footer,
  GridConfig,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
  type ArticleItemProps,
} from "components"
import {
  jsxFactory,
  markdownFilesInDir,
  title,
} from "utils"

import {
  withItems,
  type DataItem,
} from "src/components/ArticleItem/HOC"
import { stylesLayout } from "src/layouts"
import type { PageProps } from "types"

// Define the metadata interface
interface ArticleMetadata {
  title: string
  description: string
  slug: string
  layout: () => { [key: string]: string | number }[]
}

// Define the component props function
const articleComponentProps = (
  item: DataItem<ArticleMetadata>
) => ({
  item: item,
  layout: stylesLayout,
})

// Use the HOC
const ArticleList = withItems<
  ArticleMetadata,
  ArticleItemProps
>(ArticleItem)

const pageArticles = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const parsedFiles = await markdownFilesInDir(slug)

  return (
    <AppTheme title={title(slug)}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain hasInner>
          <ArticleList
            data={parsedFiles}
            componentProps={articleComponentProps}
          />
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticles
