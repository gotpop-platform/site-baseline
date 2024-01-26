import Logo from "@components/Logo"
import Nav from "@components/Nav"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Header = async () => {
  const { css } = useCSS({ meta: import.meta })
  const navComponent = await Nav()

  return (
    <header>
      <style>{css}</style>
      <Logo />
      {navComponent}
    </header>
  )
}

export default Header
