import h from "@utils/jsxFactory"

export const Heading = ({
  children,
  level,
  index,
}: {
  children?: JSX.Element
  level: number
  index: number
}): JSX.Element | null => {
  if (!children) return null

  const validLevels = [1, 2, 3, 4, 5, 6]
  const validatedLevel = validLevels.includes(level)
    ? level
    : 1
  const HeadingTag = `h${validatedLevel}`
  const i = index + 1
  const text = children
    .toString()
    .toLowerCase()
    .replaceAll(" ", "-")

  const id = text + "-" + i

  return (
    <a href={"#" + id}>
      <HeadingTag id={id}>{children}</HeadingTag>
    </a>
  )
}
