import BaseLinePopOver from "@components/BaseLinePopOver"
import Fragment from "@components/Fragment"
import { useCSS } from "@hooks/useCSS"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import MegaNavContent from "../MegaNavContent"
import SubMenu from "../SubMenu"
import TriggerSubMenu from "../TriggerSubMenu"

const MegaNav = () => {
  const { css } = useCSS({ meta: import.meta })

  const data = [
    { position: "1", textButton: "Products" },
    { position: "2", textButton: "About" },
    { position: "3", textButton: "Services" },
  ]

  const navItems = data.map((item) => (
    <Fragment>
      <TriggerSubMenu
        position={item.position}
        textButton={item.textButton}
      />
      <SubMenu position={item.position}>
        <MegaNavContent />
      </SubMenu>
    </Fragment>
  ))

  return (
    <nav class={mkClass(import.meta.file)}>
      <style>{css}</style>
      {navItems}
      <button
        class="trigger-sub-menu"
        popovertarget="basegrid"
      >
        Grid
      </button>
      <BaseLinePopOver />
    </nav>
  )
}

export default MegaNav
