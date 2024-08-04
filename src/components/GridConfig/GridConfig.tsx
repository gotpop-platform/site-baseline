import jsxFactory from "@utils/jsxFactory";
import { mkClass } from "@utils/mkClass";
import { useCSS } from "src/hooks/useCSS";

type GridConfigProps = { title?: string; children?: string }

const GridConfig = ({
  title,
  children,
}: GridConfigProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      {children}
    </div>
  )
}

export default GridConfig
