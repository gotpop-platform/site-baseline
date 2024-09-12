import {
  constructFilePath,
  readFileContent,
} from "./handleFile"

import { extractMetadata } from "./metaData"
import { parseMarkdown } from "./parseMarkdown"

const parseMarkdownFile = (
  directoryPath: string,
  fileName: string
): {
  metadata: Record<string, string>
  content: string
} => {
  const filePath = constructFilePath(
    directoryPath,
    fileName
  )
  const markdownContent = readFileContent(filePath)
  const { metadata, content } =
    extractMetadata(markdownContent)
  const htmlContent = parseMarkdown(content)

  return { metadata, content: htmlContent }
}

export { parseMarkdown, parseMarkdownFile }
