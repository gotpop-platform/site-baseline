import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type FooterProps = { children?: string; id?: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Footer = ({ children }: FooterProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <footer class={useName}>
      <style>{css}</style>
      <h1>Footer</h1>
    </footer>
  )
}

export default Footer
