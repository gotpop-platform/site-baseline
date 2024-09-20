export function styleNames(styles?: {
  [key: string]: string | number
}): string {
  if (!styles || Object.keys(styles).length === 0) {
    return '';
  }

  return Object.entries(styles)
    .map(([key, value]) => {
      const kebabKey = key
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .toLowerCase()
      return `${kebabKey}: ${value};`
    })
    .join(" ")
}

export const style = styleNames
