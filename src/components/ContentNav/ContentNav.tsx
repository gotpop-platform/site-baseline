import jsxFactory from "@utils/jsxFactory"
import { mkId } from "@utils/mkId"
import { useCSS } from "src/hooks/useCSS"

type ContentNavProps = {
  section: { title: string }[]
}

export const ContentNav = ({
  section,
}: ContentNavProps): JSX.Element => {
  const { css } = useCSS({ meta: import.meta })
  const list = section.map(({ title }, index) => (
    <li>
      <a href={"#" + mkId(title, index)}>
        {title} {"==>"}
      </a>
    </li>
  ))

  return (
    <nav class="contentNav">
      <style>{css}</style>
      <ol>{list}</ol>
    </nav>
  )
}
