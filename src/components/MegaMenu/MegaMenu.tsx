import Logo from "@components/Logo"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"
import MegaNav from "./MegaNav"

type MegaMenuProps = { title?: string; children?: string }

const MegaMenu = ({ title, children }: MegaMenuProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <header
      id="liambest"
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

export default MegaMenu
