export const mkClass = (meta: string) =>
  meta.split(".").shift()?.toLowerCase()
