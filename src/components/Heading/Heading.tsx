import h from "@utils/jsxFactory"

export const Heading = ({
  children,
  level,
  index,
}: {
  children?: JSX.Element
  level: number
  index: number
}): JSX.Element => {
  const HeadingTag = `h${level}`
  const id = "heading-" + (index + 1)

  return (
    <a href={"#" + id}>
      <HeadingTag id={id}>{children}</HeadingTag>
    </a>
  )
}
