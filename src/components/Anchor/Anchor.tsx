import jsxFactory from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type AnchorProps = {
  href: string
  children?: string | JSX.Element | JSX.Element[]
}

export const Anchor = ({ href, children }: AnchorProps) => {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    // <button
    //   class={useName + " link-Anchor"}
    //   popovertarget="mypopover"
    //   id="pop-trigger"
    // >
    //   <style>{css}</style>
    //   {children}
    //   <span
    //     class="content"
    //     id="mypopover"
    //     popover
    //     anchor="pop-trigger"
    //   >
    //     This is the achored content
    //   </span>
    // </button>
    <div>
      <style>{css}</style>
      <button popovertarget="menu" id="menu-btn">
        {children}
      </button>

      <ul role="nav" id="menu" popover>
        <li>
          <a href="/about">View Profile</a>
        </li>
        <li>
          <a href="/about">Messages</a>
        </li>
        <li>
          <a href="/about">Favorites</a>
        </li>
        <li>
          <a href="'/about'">Account Settings</a>
        </li>
        <li>
          <button popovertarget="submenu">
            Storefront <span class="arrow">➤</span>
          </button>
          <ul id="submenu" role="nav" popover>
            <li>
              <a href="/about">Listings</a>
            </li>
            <li>
              <a href="/about">Special Offers</a>
            </li>
            <li>
              <a href="/about">Sign out</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
