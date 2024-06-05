import { readFileSync } from "fs"

interface UseCSSOptions {
  meta: ImportMeta
  global?: boolean
}

export function useCSS({
  meta,
  global = false,
}: UseCSSOptions) {
  const { file, dir } = meta
  const theFile = file.split(".").shift()
  const theRoot = process.cwd()

  const thePath = global
    ? `${theRoot}/src/styles/global.css`
    : `${dir}/${theFile}.css`

  const css = readFileSync(thePath, "utf-8")

  const useName = theFile?.toLowerCase()

  return {
    css,
    useName,
  }
}
