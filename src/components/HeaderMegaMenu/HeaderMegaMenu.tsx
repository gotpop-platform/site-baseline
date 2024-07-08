import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"
import HeaderMegaMenuInner from "./HeaderSurface"
import LogoMegaMenu from "./LogoMegaMenu"
import MegaNav from "./MegaNav"

type HeaderMegaMenuProps = {
  title?: string
  children?: string
}

const HeaderMegaMenu = ({
  title,
  children,
}: HeaderMegaMenuProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <header
      id="headerMegaMenu"
      popover="auto"
      class={mkClass(import.meta.file)}
    >
      <style>{css}</style>
      <HeaderMegaMenuInner>
        <LogoMegaMenu />
        <MegaNav />
      </HeaderMegaMenuInner>
    </header>
  )
}

export default HeaderMegaMenu
