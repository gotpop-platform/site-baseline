import Fragment from "@components/Fragment"
import jsxFactory from "@utils/jsxFactory"
import { useCSS } from "@hooks/useCSS"

const TriggerSubMenu = ({
  position,
  textButton,
  href,
}: {
  position?: string
  textButton?: string
  href?: string
}) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <Fragment>
      <a
        href={href}
        class="menu-link"
        id={`menu-toggle-${position}`}
      >
        <style>{css}</style>
        <span>{textButton}</span>
      </a>
      <button
        popovertarget={`sub-menu-${position}`}
        class="menu-toggle"
        aria-haspopup="true"
        aria-label="Open submenu"
      />
    </Fragment>
  )
}

export default TriggerSubMenu
