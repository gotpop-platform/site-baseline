import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type BlockProps = { children?: string; id?: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Block = ({ children }: BlockProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <section class={useName}>
      <style>{css}</style>
      {children}
    </section>
  )
}

export default Block
