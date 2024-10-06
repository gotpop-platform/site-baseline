import { Icon, IconTypes } from "components"
import { mkClass, useCSS } from "@gotpop-platform/utils"

import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

export function GalleryIntro({
  slug,
  metadata,
  htmlContent,
  ...rest
}: {
  slug: string
  metadata: any
  htmlContent: string
  [key: string]: any
}): JSX.Element {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <div class={mkClass(import.meta.file)} {...rest}>
      <style>{css}</style>
      <h2>{metadata.title}</h2>
      <section>{htmlContent}</section>
      <nav class="links">
        <a class="link" href={metadata.prev}>
          <Icon type={IconTypes.twoTone} iconName="arrow_circle_left" />
          <span class="text">Prev</span>
        </a>
        <a class="link" href={metadata.next}>
          <span class="text">Next</span>
          <Icon type={IconTypes.twoTone} iconName="arrow_circle_right" />
        </a>
      </nav>
    </div>
  )
}
