import { useCSS } from "@hooks/useCSS"
import jsxFactory from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"

const HeaderSurface = ({
  children,
}: {
  children?: string
}) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      {children}
    </div>
  )
}

export default HeaderSurface
