import TriggerSubMenu from "../TriggerSubMenu"
import jsxFactory from "@utils/jsxFactory"
import { useCSS } from "@hooks/useCSS"

export const MenuItem = ({
  children,
  position,
  textButton,
  href,
}: {
  children?: JSX.Element
  position: string
  textButton: string
  href: string
}) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div
      class="menu-item"
      id={`menu-items-${position}`}
      style={`--menuItemAnchor: --list-item-${position}`}
    >
      <style>{css}</style>
      <TriggerSubMenu
        position={position}
        textButton={textButton}
        href={href}
      />
      {children}
    </div>
  )
}
