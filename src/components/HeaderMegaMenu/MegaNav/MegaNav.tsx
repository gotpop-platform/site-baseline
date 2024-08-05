import SubMenu from "../SubMenu"
import SubMenuContent from "../SubMenuContent"
import jsxFactory from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { navData } from "./MegaNav.data"
import { useCSS } from "@hooks/useCSS"

export const MegaNav = () => {
  const { css } = useCSS({ meta: import.meta })

  const navItems = navData.map(
    ({ position, textButton, submenuItems }) => (
        <SubMenu position={position} textButton={textButton}>
          <SubMenuContent submenuItems={submenuItems} position={position} textButton={textButton} />
        </SubMenu>
    )
  )

  return (
    <nav class={mkClass(import.meta.file)}>
      <style>{css}</style>
      {navItems}
    </nav>
  )
}

export default MegaNav
