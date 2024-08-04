import jsxFactory from "@utils/jsxFactory";
import { useCSS } from "src/hooks/useCSS";

type GridProps = { title?: string; children?: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Grid = ({ title, children }: GridProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={useName}>
      <style>{css}</style>
      {children}
    </div>
  )
}

export default Grid
