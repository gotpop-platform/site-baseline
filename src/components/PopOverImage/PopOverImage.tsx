import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type PopOverImageProps = {
  title: string
  text: string
  width?: number
  height?: number
}

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const PopOverImage = async ({
  title,
  text,
  width = 500,
  height = 300,
}: PopOverImageProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div class={useName}>
      <style>{css}</style>
      <button popovertarget="mypopover">
        <img
          src={`https://picsum.photos/${width}/${height}`}
          alt="Nice image"
        />
      </button>
      <figure id="mypopover" popover="auto" class="figure">
        <img
          src={`https://picsum.photos/${width}/${height}`}
          alt="Nice image"
        />
        <figcaption>{text}</figcaption>
      </figure>
    </div>
  )
}

export default PopOverImage
