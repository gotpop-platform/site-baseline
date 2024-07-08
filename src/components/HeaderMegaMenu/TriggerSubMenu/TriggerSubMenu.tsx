import { useCSS } from "@hooks/useCSS"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"

const TriggerSubMenu = ({
  position,
  textButton,
}: {
  position?: string
  textButton?: string
}) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <button
      class={mkClass(import.meta.file)}
      id={`menu-toggle-${position}`}
      popovertarget={`menu-items-${position}`}
    >
      <style>{css}</style>
      <span>{textButton}</span>
    </button>
  )
}

export default TriggerSubMenu
