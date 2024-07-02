import Icon from "@components/Icon"
import {
  dataDemo,
  type GalleryItem,
} from "@pages/subdomains/demo/demo.data"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

export function findPrevAndNext(slug: string): GalleryItem {
  const item = dataDemo.get(slug)
  const init: GalleryItem = {
    id: 1,
    name: "Default Name",
    prev: "item-4",
    next: "item-2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  }

  if (item) {
    return {
      ...item,
    }
  } else {
    return init
  }
}

function GalleryIntro({
  slug,
}: {
  slug: string
}): JSX.Element {
  const { css, useName } = useCSS({ meta: import.meta })
  const { prev, next, text } = findPrevAndNext(slug)

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <h2>Intro {slug}</h2>
      <p>{text}</p>
      <nav class="links">
        <a class="link" href={`/gallery/${prev}`}>
          <Icon iconName="arrow_circle_left" />
          <span>Prev</span>
        </a>
        <a class="link" href={`/gallery/${next}`}>
          <span>Next</span>
          <Icon iconName="arrow_circle_right" />
        </a>
      </nav>
    </div>
  )
}

export default GalleryIntro
