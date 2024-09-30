import { readFileSync } from "fs"
import { style } from "utils"

interface UseCSSOptions {
  meta: ImportMeta
  styles: { [key: string]: string }
}

export function useCSS({ meta, styles }: UseCSSOptions) {
  const { file, dir } = meta
  const theFile = file.split(".").shift()
  const thePath = `${dir}/${theFile}.css`
  const theStyle = style(styles)
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
