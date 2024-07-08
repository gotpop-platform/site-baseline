import Fragment from "@components/Fragment"
import MegaNavContent from "../MegaNavContent"
import SubMenu from "../SubMenu"
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
          <MegaNavContent submenuItems={submenuItems} />
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
