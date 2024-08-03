// Make an id from a string

export const mkId = (
  text: string,
  index: number
): string => {
  const i = index + 1
  const str = text
    .toString()
    .toLowerCase()
    .replaceAll(" ", "-")

  const id = str + "-" + i

  return id
}
