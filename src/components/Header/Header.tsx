import Block from "@components/Block"
import Logo from "@components/Logo"
import Nav from "@components/Nav"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Header = () => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <Block tag="header">
      <style>{css}</style>
      <Logo />
      <Nav />
    </Block>
  )
}

export default Header
