import jsxFactory from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
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
    <a
      href={href}
      class={mkClass(import.meta.file)}
      id={`menu-toggle-${position}`}
    >
      <style>{css}</style>
      <span>{textButton}</span>
    </a>
  )
}

export default TriggerSubMenu
