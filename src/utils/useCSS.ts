import { readFileSync } from "fs"
import { styleVars, type StyleObjProps } from "utils"

interface UseCSSOptions {
  meta: ImportMeta
  styles?: StyleObjProps
}

export function useCSS({ meta, styles }: UseCSSOptions) {
  const { file, dir } = meta
  const theFile = file.split(".").shift()
  const thePath = `${dir}/${theFile}.css`

  const theStyle = styles ? styleVars(styles) : ""
  const cssFile = readFileSync(thePath, "utf-8")

  const theStyleScoped = `
      @scope{
         :scope {
          ${theStyle}
         }
        }`

  const css = styles
    ? `${theStyleScoped}\n${cssFile}`
    : cssFile

  const useName = theFile?.toLowerCase()

  return {
    css,
    useName,
  }
}
