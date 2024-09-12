import jsxFactory from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

export function MobileMenuTrigger() {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <div class="inner">
        <button popovertarget="headerMegaMenu">
          Open!
        </button>
      </div>
    </div>
  )
}
