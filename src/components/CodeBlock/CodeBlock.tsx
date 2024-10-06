import { mkClass, useCSS } from "@gotpop-platform/utils"

import { jsxFactory } from "utils"

export function CodeBlock({ children }: { children?: string }): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  )
}
