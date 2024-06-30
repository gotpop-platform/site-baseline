import { readFileSync } from "fs"

interface UseCSSOptions {
  meta: ImportMeta
  global?: boolean
}

export function useCSSTheme(url: string) {
  const pathy = url
  // console.log("pathy :", pathy)

  if (!pathy) {
    return {
      cssTheme: "",
    }
  }

  const cssTheme = readFileSync(pathy, "utf-8")

  return {
    cssTheme,
  }
}
