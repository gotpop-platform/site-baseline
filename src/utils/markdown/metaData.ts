import type { MarkdownFile } from "./markdown.types"

export const extractMetadata = (
  markdownContent: string
): MarkdownFile => {
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
        metadata[key] = value.replace(/^"|"$/g, "")
      }
    })

    content = markdownContent.slice(metadataMatch[0].length)
  }

  return { metadata, content }
}
