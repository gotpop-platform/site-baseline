import { cn, jsxFactory, mkClass, useCSS } from "utils"

type GridProps = {
  isRoot?: boolean
  children?: string
}

export const Grid = ({
  isRoot = false,
  children,
}: GridProps) => {
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
