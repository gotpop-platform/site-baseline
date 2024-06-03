export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()
