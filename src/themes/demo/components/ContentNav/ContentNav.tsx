import h from "@utils/jsxFactory"
import { mkId } from "@utils/mkId"
import { useCSS } from "src/hooks/useCSS"

export const ContentNav = ({
  section,
  idSlug,
}: {
  section: { title: string }[]
  idSlug: string
}) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <nav class="contentNav">
      <style>{css}</style>
      <ol>
        {section.map(({ title }, index) => (
          <li>
            <a href={"#" + mkId(title, index)}>
              {title} {"==>"}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
