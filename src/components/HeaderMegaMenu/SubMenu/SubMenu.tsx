import TriggerSubMenu from "../TriggerSubMenu"
import jsxFactory from "@utils/jsxFactory"
import { useCSS } from "@hooks/useCSS"

const SubMenu = ({
  children,
  position,
  textButton,
}: {
  children?: JSX.Element
  position: string
  textButton: string
}) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div
      class="submenu"
      id={`menu-items-${position}`}
      // anchor={`menu-toggle-${position}`}
      style={`--myVar: --list-item-${position}`}
    >
      <style>{css}</style>
      <TriggerSubMenu
          position={position}
          textButton={textButton}
        />
      {children}
    </div>
  )
}

export default SubMenu
