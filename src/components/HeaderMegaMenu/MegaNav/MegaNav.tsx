import BaseLinePopOver from "@components/BaseLinePopOver"
import { useCSS } from "@hooks/useCSS"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import MegaNavContent from "../MegaNavContent"
import MegaNavItem from "../MegaNavItem"

const MegaNav = () => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <nav class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <MegaNavItem textButton="Products" position="1">
        <MegaNavContent />
      </MegaNavItem>
      <MegaNavItem textButton="About" position="2">
        <ul>
          <li class="item">Menu item 133</li>
          <li class="item">Menu item 233</li>
        </ul>
      </MegaNavItem>
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
