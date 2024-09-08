import { MenuItem } from "../MenuItem"
import SubMenuContent from "../SubMenuContent"
import jsxFactory from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { navData } from "./MegaNav.data"
import { useCSS } from "@hooks/useCSS"

export const MegaNav = () => {
  const { css } = useCSS({ meta: import.meta })

  const navItems = navData.map(
    ({ href, position, textButton, submenuItems }) => (
      <MenuItem
        position={position}
        textButton={textButton}
        href={href}
        subMenuItems={submenuItems}
      >
        {submenuItems && (
          <SubMenuContent
            submenuItems={submenuItems}
            position={position}
            textButton={textButton}
          />
        )}
      </MenuItem>
    )
  )

  return (
    <nav class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <ul>{navItems}</ul>
    </nav>
  )
}

export default MegaNav
