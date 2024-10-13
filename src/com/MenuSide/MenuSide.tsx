import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { useCSS } from "@gotpop-platform/package-utilities"

export function MenuSide({
  children,
  isMain = false,
  hasInner = false,
  ...rest
}: {
  children?: string | JSX.Element | (string | JSX.Element)[]
  isMain?: boolean
  hasInner?: boolean
  [key: string]: any
}): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  return (
    <nav class="menu-side" {...rest}>
      <style>{css}</style>
      <ul>
        <li>
          <details id="getting-started" open>
            <summary>
              <a href="/">Getting started</a>
            </summary>
            <div class="content">
              <p>Installation</p>
            </div>
          </details>
        </li>
        <li>
          <details id="workflow">
            <summary>Workflow</summary>
            <div class="content">
              <ul>
                <li>
                  <p>
                    Everything displayed by CSS is a box. Understanding how the CSS Box Model works
                    is therefore a core foundation of CSS.
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Read Article</a>
                  </p>
                </li>
              </ul>
            </div>
          </details>
        </li>
        <li>
          <details id="selectors">
            <summary>Tutorials</summary>
            <div class="content">
              <ul>
                <li>
                  <p>
                    Everything displayed by CSS is a box. Understanding how the CSS Box Model works
                    is therefore a core foundation of CSS.
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Read Article</a>
                  </p>
                </li>
              </ul>
            </div>
          </details>
        </li>
      </ul>
    </nav>
  )
}
