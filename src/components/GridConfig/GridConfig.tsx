import { classNames as cn } from "@utils/classnames"
import jsxFactory from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

type GridConfigProps = {
  isRoot?: boolean
  children?: string
}

const GridConfig = ({
  isRoot = false,
  children,
}: GridConfigProps) => {
  const { css } = useCSS({ meta: import.meta })
  const mk = mkClass(import.meta.file)

  return (
    <div
      class={cn(mk, {
        "root-grid": isRoot,
      })}
    >
      <style>{css}</style>
      {children}
    </div>
  )
}

export default GridConfig
