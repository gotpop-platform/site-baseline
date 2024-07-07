import { useCSS } from "@hooks/useCSS"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"

const MegaNavContent = () => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <ul>
        <li class="item">
          <a href="/gallery/1">Product item</a>
        </li>
        <li class="item">
          <a href="#">Product item</a>
        </li>
      </ul>
    </div>
  )
}

export default MegaNavContent
