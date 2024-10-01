import { jsxFactory, useCSS } from "utils"

import { mkClass } from "utils"

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
