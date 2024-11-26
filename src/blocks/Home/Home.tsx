import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  HeaderMegaMenu,
  HeroItem,
  Tag,
  withItems,
} from "@gotpop-platform/package-components"
import { styleMain, stylesLayout } from "."

import { BlockDataProps } from "src/types/types"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { title } from "@gotpop-platform/package-utilities"

const ArticleList = withItems(ArticleItem)

export const block = ({ query, allContent, scriptPaths }: BlockDataProps) => {
  const allForms = allContent.get("Features")

  return (
    <AppTheme
      title={title("Home", process.env.npm_package_config_app_site_name || "GotPop")}
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
