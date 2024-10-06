import { mkClass, useCSS } from "utils"

import { MenuItem } from "../MenuItem"
import { SubMenuContent } from "../SubMenuContent"
import { jsxFactory } from "utils"
import { navData } from "./MegaNav.data"

export const MegaNav = () => {
  const { css } = useCSS({ meta: import.meta })

  const navItems = navData.map(({ href, position, textButton, submenuItems }) => (
    <MenuItem position={position} textButton={textButton} href={href} subMenuItems={submenuItems}>
      {submenuItems && (
        <SubMenuContent submenuItems={submenuItems} position={position} textButton={textButton} />
      )}
    </MenuItem>
  ))

  return (
    <nav class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <ul>{navItems}</ul>
    </nav>
  )
}

export default MegaNav
