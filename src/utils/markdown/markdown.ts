import {
  constructFilePath,
  readFileContent,
} from "./handleFile"

import { extractMetadata } from "./metaData"
import { parseMarkdown } from "./parseMarkdown"
import { toc } from "./types"

const parseMarkdownFile = (
  directoryPath: string,
  fileName: string
): {
  metadata: Record<string, string>
  content: string
  toc: toc[]
} => {
  const filePath = constructFilePath(
    directoryPath,
    fileName
  )
  const markdownContent = readFileContent(filePath)
  const { metadata, content } =
    extractMetadata(markdownContent)
  const { html, toc } = parseMarkdown(content)

  return { metadata, content: html, toc }
}

export { parseMarkdown, parseMarkdownFile }
