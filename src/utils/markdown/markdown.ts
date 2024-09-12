import { join } from "path"
import { parseMarkdown } from "./parseMarkdown"
import { readFileSync } from "fs"

// Function to read and parse a Markdown file
const parseMarkdownFile = (
  directoryPath: string,
  fileName: string
): {
  metadata: Record<string, string>
  content: string
} => {
  const filePath = join(
    "src",
    "content",
    directoryPath,
    `${fileName}.md`
  )

  if (!filePath) {
    throw new Error(`File not found: ${filePath}`)
  }

  // Read the Markdown file
  const markdownContent = readFileSync(filePath, "utf-8")

  // Extract metadata
  const metadataMatch = markdownContent.match(
    /^---\n([\s\S]*?)\n---/
  )
  let metadata: Record<string, string> = {}
  let content = markdownContent

  if (metadataMatch) {
    const metadataLines = metadataMatch[1].split("\n")
    metadataLines.forEach((line) => {
      const [key, value] = line
        .split(":")
        .map((part) => part.trim())
      if (key && value) {
        metadata[key] = value.replace(/^"|"$/g, "") // Remove surrounding quotes if any
      }
    })
    content = markdownContent.slice(metadataMatch[0].length)
  }

  // Parse the Markdown content
  const htmlContent = parseMarkdown(content)

  return { metadata, content: htmlContent }
}

// Export the functions
export { parseMarkdown, parseMarkdownFile }
