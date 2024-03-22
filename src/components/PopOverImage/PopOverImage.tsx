import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type PopOverImageProps = { title: string; text: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const PopOverImage = async ({
  title,
  text,
}: PopOverImageProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={useName}>
      <style>{css}</style>
      <button popovertarget="mypopover">
        <img
          src="https://picsum.photos/500/300"
          alt="Nice image"
        />
      </button>
      <figure id="mypopover" popover="auto" class="figure">
        <img
          src="https://picsum.photos/500/600"
          alt="Nice image"
        />
        <figcaption>{text}</figcaption>
      </figure>
    </div>
  )
}

export default PopOverImage
