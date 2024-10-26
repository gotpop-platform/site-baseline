import { AppTheme, Footer, GridGap } from "@gotpop-platform/package-components"
import { stylesDocs, stylesDocsBody, stylesDocsNav } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { renderComponents, Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { parseMarkdownFile } from "@gotpop-platform/package-markdown"
import { style, title } from "@gotpop-platform/package-utilities"
import { HeaderMegaMenu } from "src/com/HeaderMegaMenu"
import { MenuSide } from "src/com/MenuSide"

const Fragment = ({ children }: { children?: JSX.Element }) => children || null

const pageComponent = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const PATH = "src/content/components"
  const {
    pageMetadata: { title: pageTitle },
    htmlSectionsMap,
  } = parseMarkdownFile(PATH, slug)

  const { sectionHtml, sectionComponents } = htmlSectionsMap.get("main")
  const { finalContent } = await renderComponents({ sectionHtml, sectionComponents })
  console.log("htmlSectionsMap :", htmlSectionsMap)

  return (
    <AppTheme title={title(pageTitle, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <HeaderMegaMenu />
          <Tag tag="main" styles={stylesDocs}>
            <Tag tag="aside" class="docs-nav" styles={stylesDocsNav}>
              <Fragment>
                <MenuSide />
              </Fragment>
            </Tag>
            <Tag tag="section" class="docs-body" styles={stylesDocsBody}>
              <Fragment>
                <div
                  style={style({
                    padding: "1rem",
                    border: "1px solid #ccc",
                    margin: "1rem 0",
                    borderRadius: "5px",
                  })}
                >
                  {finalContent}
                </div>
              </Fragment>
            </Tag>
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageComponent
