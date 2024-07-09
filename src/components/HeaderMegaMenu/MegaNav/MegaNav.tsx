import Fragment from "@components/Fragment"
import SubMenu from "../SubMenu"
import SubMenuContent from "../SubMenuContent"
import TriggerSubMenu from "../TriggerSubMenu"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { navData } from "./MegaNav.data"
import { useCSS } from "@hooks/useCSS"

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
