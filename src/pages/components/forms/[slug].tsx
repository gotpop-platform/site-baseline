import {
  AppTheme,
  Footer,
  MenuSide,
  HeaderMegaMenu,
  renderComponents,
  Tag,
  GridFull,
} from "@gotpop-platform/package-components"
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { contentMap } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"

const Fragment = ({ children }: { children?: JSX.Element }) => children || null

const pageComponent = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const allContent = await contentMap()
  const { pageMetadata, htmlSectionsMap } = allContent.get("components").get("forms").get(slug)
  const { finalContent } = await renderComponents(htmlSectionsMap.get("main"))

  return (
    <AppTheme title={title(pageMetadata.title, SITE_NAME)}>
      <GridFull isRoot>
        <HeaderMegaMenu />
        <Tag tag="main" styles={stylesDocs}>
          <Tag tag="aside" class="docs-nav" styles={stylesDocsNav}>
            <Fragment>
              <MenuSide />
            </Fragment>
          </Tag>
          <Tag tag="section" class="docs-body" styles={stylesDocsBody}>
            {finalContent}
          </Tag>
        </Tag>
        <Footer />
      </GridFull>
    </AppTheme>
  )
}

export default pageComponent
