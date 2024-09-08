import { join } from "path"
import { readFileSync } from "fs"

// Custom Markdown parser function
const parseMarkdown = (markdown: string) => {
  // Convert headers
  markdown = markdown.replace(
    /^### (.*$)/gim,
    "<h3>$1</h3>"
  )
  markdown = markdown.replace(/^## (.*$)/gim, "<h2>$1</h2>")
  markdown = markdown.replace(/^# (.*$)/gim, "<h1>$1</h1>")

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

// Path to the Markdown file
const filePath = join("src/markdown/test.md")

// Read the Markdown file
const markdownContent = readFileSync(filePath, "utf-8")

// Parse the Markdown content
const htmlContent = parseMarkdown(markdownContent)

// Export the parsed content
export { htmlContent }
