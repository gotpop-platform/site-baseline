import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { mkClass } from "@gotpop-platform/utils"
import { useCSS } from "@gotpop-platform/utils"

export const HeaderSurface = ({ children }: { children?: string }) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      {children}
    </div>
  )
}
