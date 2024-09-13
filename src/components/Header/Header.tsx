import { Logo } from "@components/Logo"
import { Nav } from "@components/Nav"
import { jsxFactory } from "utils"
import { useCSS } from "src/hooks/useCSS"

const Header = ({ pages }: { pages: string[] }) => {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <header class={useName}>
      <style>{css}</style>
      <Logo />
      <Nav pages={pages} />
    </header>
  )
}

export default Header
