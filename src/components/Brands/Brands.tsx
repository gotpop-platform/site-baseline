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
        <span class="disclaimer">
          None of these companies use this framework
        </span>
        <div class="icons">
          <button
            class="trigger apple"
            popovertarget="apple"
          >
            <img
              height="32"
              width="32"
              src="https://cdn.simpleicons.org/apple/gray"
            />
            <div
              class="tooltip apple"
              popover="auto"
              id="apple"
            >
              Apple Nope
            </div>
          </button>
          <button
            class="trigger google"
            popovertarget="google"
          >
            <img
              height="32"
              width="32"
              src="https://cdn.simpleicons.org/google/gray"
            />
            <div
              class="tooltip google"
              popover="auto"
              id="google"
            >
              Google Nope
            </div>
          </button>
          <button
            class="trigger facebook"
            popovertarget="facebook"
          >
            <img
              height="32"
              width="32"
              src="https://cdn.simpleicons.org/facebook/hotpink"
            />
            <div
              class="tooltip facebook"
              popover="auto"
              id="facebook"
            >
              Facebook Nope
            </div>
          </button>
          <button
            class="trigger spotify"
            popovertarget="spotify"
          >
            <img
              height="32"
              width="32"
              src="https://cdn.simpleicons.org/spotify/0cf"
            />
            <div
              class="tooltip spotify"
              popover="auto"
              id="spotify"
            >
              Spotify Nope
            </div>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Brands
