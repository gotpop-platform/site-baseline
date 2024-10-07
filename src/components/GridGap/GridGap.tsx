import { cn, mkClass, useCSS } from "utils"

import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

type GridGapProps = {
  isRoot?: boolean
  children?: string
}

export const GridGap = ({ isRoot = false, children }: GridGapProps) => {
  const { css } = useCSS({ meta: import.meta })
  const cl = mkClass(import.meta.file)

  return (
    <div
      class={cn(cl, {
        "root-grid": isRoot,
      })}
    >
      <style>{css}</style>
      {children}
    </div>
  )
}
