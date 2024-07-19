import h from "@utils/jsxFactory"

export const Heading = ({
  children,
  level,
  index,
  headingId,
}: {
  children?: JSX.Element
  level: number
  index: number
  headingId: string
}): JSX.Element => {
  const HeadingTag = `h${level}`
  const id = "heading-" + (index + 1)

  return (
    <a href={"#" + headingId + index}>
      <HeadingTag id={headingId + index}>
        {children}
      </HeadingTag>
    </a>
  )
}
