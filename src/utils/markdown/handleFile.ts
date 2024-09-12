import { join } from "path"
import { readFileSync } from "fs"

export const constructFilePath = (
  directoryPath: string,
  fileName: string
): string => {
  return join(
    "src",
    "content",
    directoryPath,
    `${fileName}.md`
  )
}

export const readFileContent = (
  filePath: string
): string => {
  if (!filePath) {
    throw new Error(`File not found: ${filePath}`)
  }
  return readFileSync(filePath, "utf-8")
}
