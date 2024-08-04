import jsxFactory from "@utils/jsxFactory";
import { useCSS } from "src/hooks/useCSS";

type GridFullProps = { title?: string; children?: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const GridFull = ({ title, children }: GridFullProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={useName}>
      <style>{css}</style>
      {children}
    </div>
  )
}

export default GridFull
