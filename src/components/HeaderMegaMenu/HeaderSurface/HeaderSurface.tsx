import jsxFactory from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "@hooks/useCSS"

export const HeaderSurface = ({
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
