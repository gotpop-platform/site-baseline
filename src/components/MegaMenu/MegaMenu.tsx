import Logo from "@components/Logo"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"
import MegaNav from "./MegaNav"

type MegaMenuProps = { title?: string; children?: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const MegaMenu = ({ title, children }: MegaMenuProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <header class={useName}>
      <style>{css}</style>
      <div class="inner">
        <Logo />
        <MegaNav />
      </div>
    </header>
  )
}

export default MegaMenu
