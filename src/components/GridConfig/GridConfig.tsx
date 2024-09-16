import { cn, jsxFactory, mkClass, useCSS } from "utils"

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
