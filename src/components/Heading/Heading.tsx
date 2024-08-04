import jsxFactory from "@utils/jsxFactory"
import { mkId } from "@utils/mkId"

export const Heading = ({
  children,
  level,
  index,
}: {
  children?: JSX.Element
  level: 1 | 2 | 3 | 4 | 5 | 6
  index: number
}): JSX.Element | null => {
  const validLevels = [1, 2, 3, 4, 5, 6]
  const validatedLevel = validLevels.includes(level)
    ? level
    : null

  if (!children || !validatedLevel) return null

  const HeadingTag = `h${validatedLevel}`
  const id = mkId(children.toString(), index)

  return (
    <a href={"#" + id}>
      <HeadingTag id={id}>{children}</HeadingTag>
    </a>
  )
}
