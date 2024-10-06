import { mkClass, useCSS } from "@gotpop-platform/utils"

import { jsxFactory } from "utils"

export const HeaderSurface = ({ children }: { children?: string }) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      {children}
    </div>
  )
}
