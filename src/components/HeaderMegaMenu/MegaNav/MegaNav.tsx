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

  return (
    <nav class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <Fragment>
        <TriggerSubMenu
          position="1"
          textButton="Products"
        />
        <SubMenu position="1">
          <MegaNavContent />
        </SubMenu>
      </Fragment>
      <Fragment>
        <TriggerSubMenu position="2" textButton="About" />
        <SubMenu position="2">
          <ul>
            <li class="item">Menu item 133</li>
            <li class="item">Menu item 233</li>
          </ul>
        </SubMenu>
      </Fragment>
      <a class="trigger-sub-menu" href="/gallery">
        Gallery
      </a>
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
