import { dirname } from "path"
import { fileURLToPath } from "url"
import { join } from "path"
import { readFileSync } from "fs"

export function useCSS(meta: any) {
    const __filename = fileURLToPath(meta.url)
    const __dirname = dirname(__filename)

    const theFile = meta.file.split(".").shift()
    console.log('theFile :', theFile);

    const css = readFileSync(join(__dirname, `./${theFile}.css`), "utf-8")

    return {
        css
    }
}