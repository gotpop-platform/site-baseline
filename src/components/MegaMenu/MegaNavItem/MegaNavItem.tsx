import h from "@utils/jsxFactory"

const MegaNavItem = ({
  position,
  children,
  textButton,
}: {
  position?: string
  children?: string
  textButton?: string
}) => {
  const trigger = () => (
    <button
      class="trigger-sub-menu"
      id={`menu-toggle-${position}`}
      popovertarget={`menu-items-${position}`}
    >
      {textButton}
    </button>
  )

  const menu = () => (
    <div
      class="submenu"
      id={`menu-items-${position}`}
      popover="auto"
      anchor={`menu-toggle-${position}`}
    >
      {children}
    </div>
  )

  const Fragment = () =>
    [trigger, menu].map((item) => item())

  return <Fragment />
}

export default MegaNavItem
