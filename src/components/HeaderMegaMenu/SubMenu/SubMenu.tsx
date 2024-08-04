import { useCSS } from "@hooks/useCSS"
import jsxFactory from "@utils/jsxFactory"

const SubMenu = ({
  children,
  position,
}: {
  children?: JSX.Element
  position: string
}) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div
      class="submenu"
      id={`menu-items-${position}`}
      popover="auto"
      anchor={`menu-toggle-${position}`}
    >
      <style>{css}</style>
      {children}
    </div>
  )
}

export default SubMenu
