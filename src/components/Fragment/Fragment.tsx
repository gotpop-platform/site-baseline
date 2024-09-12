export const Fragment = ({
  children,
}: {
  children?: JSX.Element
}): JSX.Element | null => {
  if (children !== undefined) {
    return children
  }
  return null
}
