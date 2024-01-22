import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type GridProps = { title?: string; content?: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Grid = ({ title, content }: GridProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={useName}>
      <style>{css}</style>
      {content}
    </div>
  )
}

export default Grid
