import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  Surface,
} from "components"
import {
  jsxFactory,
  markdownFilesInDir,
  style,
  title,
} from "utils"

import { withItems } from "generics"
import { stylesLayout } from "src/layouts"
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
          <ArticleList
            markdownItems={markdownItems}
            layout={stylesLayout}
          />
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

export default pageGallery
