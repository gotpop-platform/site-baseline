import { readFileSync } from "fs"

interface UseCSSOptions {
  meta: ImportMeta
  global?: boolean
}

export function useCSS({
  meta,
  global = false,
}: UseCSSOptions) {
  // console.log("meta :", meta.file)
  const { file, dir } = meta
  const theFile = file.split(".").shift()
  // console.log("theFile :", theFile)
  const theRoot = process.cwd()

  const thePath = global
    ? `${theRoot}/src/styles/global.css`
    : `${dir}/${theFile}.css`

  // console.log("thePath :", thePath)
  const css = readFileSync(thePath, "utf-8")

  const useName = theFile?.toLowerCase()

  return {
    css,
    useName,
  }
}
