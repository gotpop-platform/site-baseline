import {
  AppTheme,
  ArticleItem,
  Footer,
  GridGap,
  MobileMenuTrigger,
} from "@gotpop-platform/package-components"
import { Tag, withItems } from "generics"
import { stylesDocs, stylesDocsBody, stylesDocsLayout, stylesDocsNav } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { markdownFilesInDir } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"
import { HeaderMegaMenu } from "src/com/HeaderMegaMenu"

// const ArticleList = withItems(ArticleItem)

const Fragment = ({ children }: { children?: JSX.Element }) => children || null

const pageGallery = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const markdownItems = await markdownFilesInDir(slug)

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <div class="graph">
          <MobileMenuTrigger />
          <HeaderMegaMenu />
          <Tag tag="main" styles={stylesDocs}>
            <Tag tag="aside" class="docs-nav" styles={stylesDocsNav}>
              <Fragment>
                <details open>
                  <summary>Welcome to Learn CSS!</summary>
                  <p>
                    An evergreen CSS course and reference to level up your web styling expertise.
                  </p>
                  <p>
                    <a href="#">Read Article</a>
                  </p>
                </details>

                <details>
                  <summary>Box Model</summary>
                  <p>
                    Everything displayed by CSS is a box. Understanding how the CSS Box Model works
                    is therefore a core foundation of CSS.
                  </p>
                  <p>
                    <a href="#">Read Article</a>
                  </p>
                </details>

                <details>
                  <summary>Selectors</summary>
                  <p>
                    To apply CSS to an element you need to select it. CSS provides you with a number
                    of different ways to do this, and you can explore them in this module.
                  </p>
                  <p>
                    <a href="#">Read Article</a>
                  </p>
                </details>

                <details>
                  <summary>…</summary>
                  <p>
                    <em>
                      (chapters 4 to 30 of this course have been omitted for demonstation purposes)
                    </em>
                  </p>
                </details>
              </Fragment>
            </Tag>
            {/* <ArticleList markdownItems={markdownItems} layout={stylesDocsLayout} /> */}
            <Tag tag="section" class="docs-body" styles={stylesDocsBody}>
              <Fragment>
                <h1>Getting started</h1>
                <p>This is the second section.</p>
              </Fragment>
            </Tag>
          </Tag>
          <Footer />
        </div>
      </GridGap>
    </AppTheme>
  )
}

export default pageGallery
