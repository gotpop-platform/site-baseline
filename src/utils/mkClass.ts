// Remove file extension from import.meta.file and convert camelCase to kebab-case

export const mkClass = (meta: string): string | undefined =>
  meta
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .split(".")
    .shift()
    ?.toLowerCase()
