import { mkClass, useCSS } from "utils"

import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

export const HeaderSurface = ({ children }: { children?: string }) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      {children}
    </div>
  )
}
