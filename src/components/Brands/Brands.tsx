import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type BrandsProps = { title?: string; text?: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Brands = async ({ title, text }: BrandsProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <aside class={useName}>
      <style>{css}</style>
      <div class="inner">
        <div class="nice">
          <img
            height="32"
            width="32"
            src="https://cdn.simpleicons.org/apple/gray"
          />
          <img
            height="32"
            width="32"
            src="https://cdn.simpleicons.org/google/gray"
          />
          <img
            height="32"
            width="32"
            src="https://cdn.simpleicons.org/facebook/hotpink"
          />
          <img
            height="32"
            width="32"
            src="https://cdn.simpleicons.org/spotify/0cf"
          />
        </div>
      </div>
    </aside>
  )
}

export default Brands
