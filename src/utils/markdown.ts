import { readFileSync } from "fs"

// Custom Markdown parser function
const parseMarkdown = (markdown: string): string => {
  let h1Counter = 0
  let h2Counter = 0
  let h3Counter = 0

  // Convert headers with unique IDs
  markdown = markdown.replace(
    /^### (.*$)/gim,
    (_, header) => {
      const id = h3Counter++
      return `<a href='#h3-${id}'><h3 id="h3-${id}">${header}</h3></a>`
    }
  )
  markdown = markdown.replace(
    /^## (.*$)/gim,
    (_, header) => {
      const id = h2Counter++
      return `<a href='#h2-${id}'><h2 id="h2-${id}">${header}</h2></a>`
    }
  )
  markdown = markdown.replace(
    /^# (.*$)/gim,
    (_, header) => {
      const id = h1Counter++
      return `<a href='#h1-${id}'><h1 id="h1-${id}">${header}</h1></a>`
    }
  )

  markdown = markdown.replace(
    /^## (.*$)/gim,
    (_, header) =>
      `<h2 id="h2-${h2Counter++}">${header}</h2>`
  )
  markdown = markdown.replace(
    /^# (.*$)/gim,
    (_, header) =>
      `<h1 id="h1-${h1Counter++}">${header}</h1>`
  )

  // Convert bold
  markdown = markdown.replace(
    /\*\*(.*)\*\*/gim,
    "<b>$1</b>"
  )
  markdown = markdown.replace(/__(.*)__/gim, "<b>$1</b>")

  // Convert italic
  markdown = markdown.replace(/\*(.*)\*/gim, "<i>$1</i>")
  markdown = markdown.replace(/_(.*)_/gim, "<i>$1</i>")

  // Convert links
  markdown = markdown.replace(
    /\[(.*?)\]\((.*?)\)/gim,
    '<a href="$2">$1</a>'
  )

  // Convert code blocks
  markdown = markdown.replace(
    /```([^`]+)```/gim,
    "<pre><code>$1</code></pre>"
  )

  // Convert line breaks
  markdown = markdown.replace(/\n/gim, "<br>")

  return markdown.trim()
}

// Function to read and parse a Markdown file
const parseMarkdownFile = (
  filePath: string
): {
  metadata: Record<string, string>
  content: string
} => {
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
