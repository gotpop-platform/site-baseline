import Fragment from "@components/Fragment"
import { useCSS } from "@hooks/useCSS"
import jsxFactory from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import SubMenu from "../SubMenu"
import SubMenuContent from "../SubMenuContent"
import TriggerSubMenu from "../TriggerSubMenu"
import { navData } from "./MegaNav.data"

export const MegaNav = () => {
  const { css } = useCSS({ meta: import.meta })

  const navItems = navData.map(
    ({ position, textButton, submenuItems }) => (
      <Fragment>
        <TriggerSubMenu
          position={position}
          textButton={textButton}
        />
        <SubMenu position={position}>
          <SubMenuContent submenuItems={submenuItems} />
        </SubMenu>
      </Fragment>
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
