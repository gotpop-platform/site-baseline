import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type GridTypeProps = { title?: string; children?: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const GridType = ({ title, children }: GridTypeProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={useName}>
      <style>{css}</style>
      {children}
    </div>
  )
}

export default GridType
