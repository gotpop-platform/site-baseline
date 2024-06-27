import GridMenu from "@components/GridMenu"
import Logo from "@components/Logo"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type MegaMenuProps = { title?: string; children?: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const MegaMenu = ({ title, children }: MegaMenuProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <header class={useName}>
      <style>{css}</style>
      <Logo />
      <nav>
        <button
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
          <GridMenu>
            <div class="inner">
              <ul>
                <li class="item">
                  <a href="/gallery/1">Product item</a>
                </li>
                <li class="item">
                  <a href="#">Product item</a>
                </li>
              </ul>
            </div>
          </GridMenu>
        </div>
        <button id="menu-toggle" popovertarget="menu-items">
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
        <input
          type="checkbox"
          switch
          class="special"
        ></input>
      </nav>
    </header>
  )
}

export default MegaMenu
