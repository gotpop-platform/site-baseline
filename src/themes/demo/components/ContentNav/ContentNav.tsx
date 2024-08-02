import h from "@utils/jsxFactory"
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
            <a href={"#" + idSlug + index}>
              {title} {"==>"}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
