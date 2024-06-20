import { readFileSync } from "fs"

interface UseCSSOptions {
  meta: ImportMeta
  global?: boolean
}

export function useCSSTheme() {
  const pathy = "src/themes/demo/Points.css"

  const css = readFileSync(pathy, "utf-8")

  return {
    css,
  }
}
