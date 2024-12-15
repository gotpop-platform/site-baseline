import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  HeroItem,
  Tag,
  jsxFactory,
  title,
  withItems
} from "@gotpop-platform/package-baseline"
import { styleMain, stylesLayout } from "."

import { BlockDataProps } from "@gotpop-platform/types"

const ArticleList = withItems(ArticleItem)

export const block = ({ allContent, scriptPaths }: BlockDataProps) => {
  const allForms = allContent.get("Features")

  return (
    <AppTheme
      title={title("Home")}
      scriptPaths={scriptPaths}
    >
      <GridGap isRoot>
        <HeaderMegaMenu />
        <Tag tag="main" styles={styleMain}>
          <HeroItem />
          <ArticleList markdownItems={allForms} layout={stylesLayout} />
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}
