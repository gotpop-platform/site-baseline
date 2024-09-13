import { jsxFactory } from "utils"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "@hooks/useCSS"

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
    <div
      id={"sub-menu-" + position}
      popover="auto"
      class={mkClass(import.meta.file)}
    >
      <style>{css}</style>
      <ul>{items}</ul>
    </div>
  )
}
