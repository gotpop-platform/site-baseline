import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type BlockProps = { content?: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Block = ({ content }: BlockProps) => {
  // console.log("content :", content)
  const { css } = useCSS({ meta: import.meta })

  return (
    <section class={useName}>
      <h1>Hello</h1>
      <style>{css}</style>
      {content}
    </section>
  )
}

export default Block
