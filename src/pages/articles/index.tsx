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
  markdownFilesInDir,
  title,
} from "utils"

import ArticleList from "src/components/ArticleItem/HOC"
import type { PageProps } from "types"

const pageArticles = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const parsedFiles = await markdownFilesInDir(slug)

  const stylesLayout = (item: any) => [
    {
      "--grid-column": "span 12",
      "--transition-article": item.metadata.slug,
    },
    {
      "--grid-column": "span 6",
      "--transition-article": item.metadata.slug,
    },
    {
      "--grid-column": "span 6",
      "--transition-article": item.metadata.slug,
    },
    {
      "--grid-column": "span 6",
      "--transition-article": item.metadata.slug,
    },
    {
      "--grid-column": "span 6",
      "--transition-article": item.metadata.slug,
    },
    {
      "--grid-column": "span 12",
      "--transition-article": item.metadata.slug,
    },
  ]

  return (
    <AppTheme title={title(slug)}>
      <GridConfig isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Surface isMain hasInner>
          <ArticleList
            data={parsedFiles}
            layout={stylesLayout}
          />
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticles
