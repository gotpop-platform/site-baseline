import { jsxFactory } from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

type GridTypeProps = { title?: string; children?: string }

const GridType = ({ title, children }: GridTypeProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      {children}
    </div>
  )
}

export default GridType
