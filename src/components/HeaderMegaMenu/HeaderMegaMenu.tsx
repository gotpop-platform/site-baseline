import HeaderMegaMenuInner from "./HeaderSurface"
import LogoMegaMenu from "./LogoMegaMenu"
import MegaNav from "./MegaNav"
import jsxFactory from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

type HeaderMegaMenuProps = {
  title?: string
  children?: string
}

export const HeaderMegaMenu = ({
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
