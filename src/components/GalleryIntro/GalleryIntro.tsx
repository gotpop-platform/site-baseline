import { Icon } from "@components/Icon"
import { IconTypes } from "@components/Icon/Icon"
import { jsxFactory } from "utils"
import { mkClass } from "@utils/mkClass"
// import { dataDemo, type GalleryItem } from "@data/demo.data"
import { useCSS } from "@hooks/useCSS"

// export function findPrevAndNext(slug: string) {
//   // const item = dataDemo.get(slug)

//   const init: GalleryItem = {
//     id: 1,
//     name: "Default Name",
//     prev: "item-4",
//     next: "item-2",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   }

//   if (item) {
//     return {
//       ...item,
//     }
//   } else {
//     return init
//   }
// }

export function GalleryIntro({
  slug,
  metadata,
  htmlContent,
}: {
  slug: string
  metadata: any
  htmlContent: string
}): JSX.Element {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <h2>{metadata.title}</h2>
      <section>{htmlContent}</section>
      <nav class="links">
        <a class="link" href={`/gallery/${metadata.prev}`}>
          <Icon
            type={IconTypes.twoTone}
            iconName="arrow_circle_left"
          />
          <span class="text">Prev</span>
        </a>
        <a class="link" href={`/gallery/${metadata.next}`}>
          <span class="text">Next</span>
          <Icon
            type={IconTypes.twoTone}
            iconName="arrow_circle_right"
          />
        </a>
      </nav>
    </div>
  )
}
