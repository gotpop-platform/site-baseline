import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { mkId } from "utils"

export const Heading = ({
  children,
  level = 1,
  index = 0,
}: {
  children?: JSX.Element
  level?: 1 | 2 | 3 | 4 | 5 | 6
  index?: number
}): JSX.Element | null => {
  const validLevels = [1, 2, 3, 4, 5, 6]
  const validatedLevel = level && validLevels.includes(level) ? level : null

  if (!children || !validatedLevel) return null

  const HeadingTag = `h${validatedLevel}`
  const id = mkId(children.toString(), index)

  return (
    <a href={"#" + id}>
      <HeadingTag id={id}>{children}</HeadingTag>
    </a>
  )
}
