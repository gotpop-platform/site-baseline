import { jsxFactory, useCSS } from "utils"

import { mkClass } from "utils"
import { HeaderSurface } from "./HeaderSurface"
import { LogoMegaMenu } from "./LogoMegaMenu"
import { MegaNav } from "./MegaNav"

type HeaderMegaMenuProps = {
  title?: string
  children?: string
  [key: string]: any
}

export const HeaderMegaMenu = ({
  title,
  children,
  ...rest
}: HeaderMegaMenuProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <header
      id="headerMegaMenu"
      popover="auto"
      class={mkClass(import.meta.file)}
      {...rest}
    >
      <style>{css}</style>
      <HeaderSurface>
        <LogoMegaMenu />
        <MegaNav />
      </HeaderSurface>
    </header>
  )
}
