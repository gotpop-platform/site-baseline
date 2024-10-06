import { HeaderSurface } from "./HeaderSurface"
import { LogoMegaMenu } from "./LogoMegaMenu"
import { MegaNav } from "./MegaNav"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { mkClass } from "@gotpop-platform/utils"
import { useCSS } from "@gotpop-platform/utils"

type HeaderMegaMenuProps = {
  title?: string
  children?: string
  [key: string]: any
}

export const HeaderMegaMenu = ({ title, children, ...rest }: HeaderMegaMenuProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <header id="headerMegaMenu" popover="auto" class={mkClass(import.meta.file)} {...rest}>
      <style>{css}</style>
      <HeaderSurface>
        <LogoMegaMenu />
        <MegaNav />
      </HeaderSurface>
    </header>
  )
}
