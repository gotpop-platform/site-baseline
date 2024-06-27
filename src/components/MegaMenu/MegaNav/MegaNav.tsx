import { useCSS } from "@hooks/useCSS"
import h from "@utils/jsxFactory"

type MegaMenuProps = { title?: string; children?: string }

const MegaNav = () => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <nav>
      <style>{css}</style>
      <button
        class="trigger"
        id="menu-toggle-1"
        popovertarget="menu-items-1"
      >
        Products
      </button>
      <div
        class="mega menu-items"
        id="menu-items-1"
        popover="auto"
        anchor="menu-toggle-1"
      >
        <ul>
          <li class="item">
            <a href="/gallery/1">Product item</a>
          </li>
          <li class="item">
            <a href="#">Product item</a>
          </li>
        </ul>
      </div>
      <button
        class="trigger"
        id="menu-toggle"
        popovertarget="menu-items"
      >
        About
      </button>
      <div
        class="menu-items"
        id="menu-items"
        popover="auto"
        anchor="menu-toggle"
      >
        <ul>
          <li class="item">Menu item 133</li>
          <li class="item">Menu item 233</li>
        </ul>
      </div>
      {/* <input type="checkbox" switch class="special"></input> */}
    </nav>
  )
}

export default MegaNav
