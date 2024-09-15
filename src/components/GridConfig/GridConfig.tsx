import { jsxFactory, useCSS } from "utils"

import { classNames as cn } from "@utils/classnames"
import { mkClass } from "@utils/mkClass"

type GridConfigProps = {
  isRoot?: boolean
  children?: string
}

export const GridConfig = ({
  isRoot = false,
  children,
}: GridConfigProps) => {
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
