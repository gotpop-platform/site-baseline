import { jsxFactory, useCSS } from "@gotpop-platform/utils"

import { mkClass } from "@gotpop-platform/utils"

type SubmenuItem = {
  title: string
  link: string
}

export const SubMenuContent = ({
  submenuItems,
  position,
  textButton,
}: {
  submenuItems: SubmenuItem[]
  position: string
  textButton: string
}) => {
  const { css } = useCSS({ meta: import.meta })

  const items = submenuItems.map(({ title, link }) => (
    <li class="item">
      <a href={link}>{title}</a>
    </li>
  ))

  return (
    <div id={"sub-menu-" + position} popover="auto" class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <ul>{items}</ul>
    </div>
  )
}
