import jsxFactory from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "@hooks/useCSS"

type SubmenuItem = {
  title: string
  link: string
}

const SubMenuContent = ({
  submenuItems,
  position,
  textButton
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
    <div class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <ul>{items}</ul>
    </div>
  )
}

export default SubMenuContent
