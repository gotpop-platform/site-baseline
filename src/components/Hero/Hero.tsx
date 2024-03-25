import Header from "@components/Header"
import PopOverImage from "@components/PopOverImage"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type HeroProps = { title: string; text: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Hero = async ({ title, text }: HeroProps) => {
  const { css } = useCSS({ meta: import.meta })
  const headerItem = await Header()

  const popOverImageItem = await PopOverImage({
    title: "Nice image",
    text: "Nice image",
  })

  return (
    <section class={useName}>
      <style>{css}</style>
      {headerItem}
      <div class="container">
        <article>
          <h1>{title}</h1>
          <p>{text}</p>
          <a href="#liam">More</a>

          <div style="font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;">
            <span class="material-symbols-outlined">
              search
            </span>
            <span class="material-symbols-outlined">
              home
            </span>
            <span class="material-symbols-outlined">
              settings
            </span>
            <span class="material-symbols-outlined">
              favorite
            </span>
          </div>

          <div style="font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48;">
            <span class="material-symbols-outlined">
              search
            </span>
            <span class="material-symbols-outlined">
              home
            </span>
            <span class="material-symbols-outlined">
              settings
            </span>
            <span class="material-symbols-outlined">
              favorite
            </span>
          </div>

          <selectlist id="browser-filter">
            <button type="selectlist">
              <selectedoption></selectedoption>
            </button>
            <option value="edge" checked="">
              Edge
            </option>
            <option value="chrome">Chrome</option>
            <option value="firefox">Firefox</option>
            <option value="brave">Brave</option>
            <option value="safari">Safari</option>
            <option value="opera">Opera</option>
          </selectlist>
        </article>
      </div>
    </section>
  )
}

export default Hero
