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
            <p>
              Everything displayed by CSS is a box. Understanding how the CSS Box Model works is
              therefore a core foundation of CSS.
            </p>
          </details>
        </li>
        <li>
          <details id="box-model">
            <summary>Box Model</summary>
            <ul>
              <li>
                <p>
                  Everything displayed by CSS is a box. Understanding how the CSS Box Model works is
                  therefore a core foundation of CSS.
                </p>
              </li>
              <li>
                <p>
                  <a href="#">Read Article</a>
                </p>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details id="selectors">
            <summary>Selectors</summary>
            <ul>
              <li>
                <p>
                  To apply CSS to an element you need to select it. CSS provides you with a number
                  of different ways to do this, and you can explore them in this module.
                </p>
              </li>
              <li>
                <p>
                  <a href="#">Read Article</a>
                </p>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details id="more">
            <summary>…</summary>
            <ul>
              <li>
                <p>
                  <em>
                    (chapters 4 to 30 of this course have been omitted for demonstration purposes)
                  </em>
                </p>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  )
}
