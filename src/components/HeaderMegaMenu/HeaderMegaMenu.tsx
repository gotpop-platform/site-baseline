import Logo from "@components/Logo"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"
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
      <div class="inner">
        <Logo />
        <MegaNav />
      </div>
    </header>
  )
}

export default HeaderMegaMenu
