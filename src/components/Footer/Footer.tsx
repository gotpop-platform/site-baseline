import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Footer = () => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <footer class={useName}>
      <style>{css}</style>
      <h1>Footer</h1>
    </footer>
  )
}

export default Footer
