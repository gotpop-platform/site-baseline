import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "@hooks/useCSS"

type SubmenuItem = {
  title: string
  link: string
}

const MegaNavContent = ({
  submenuItems,
}: {
  submenuItems: SubmenuItem[]
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

export default MegaNavContent
