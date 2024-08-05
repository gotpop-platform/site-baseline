import jsxFactory from "@utils/jsxFactory"
import { useCSS } from "@hooks/useCSS"

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
      anchor={`menu-toggle-${position}`}
    >
      <style>{css}</style>
      {children}
    </div>
  )
}

export default SubMenu
