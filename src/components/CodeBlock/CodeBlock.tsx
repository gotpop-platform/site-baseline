import { jsxFactory, mkClass, useCSS } from "utils"

export function CodeBlock({
  slug,
  metadata,
  htmlContent,
  ...rest
}: {
  slug: string
  metadata: any
  htmlContent: string
  [key: string]: any
}): JSX.Element {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <pre>
        <code>
          <h1>code</h1>
        </code>
      </pre>
    </div>
  )
}
