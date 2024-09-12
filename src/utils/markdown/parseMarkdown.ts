export const parseMarkdown = (markdown: string): string => {
  // Convert headers with unique IDs
  let h1Counter = 0
  let h2Counter = 0
  let h3Counter = 0

  // h1
  markdown = markdown.replace(
    /^# (.*$)/gim,
    (_, header) => {
      const id = h1Counter++
      return `<a href='#h1-${id}'><h1 id="h1-${id}">${header}</h1></a>`
    }
  )

  // h2
  markdown = markdown.replace(
    /^## (.*$)/gim,
    (_, header) => {
      const id = h2Counter++
      return `<a href='#h2-${id}'><h2 id="h2-${id}">${header}</h2></a>`
    }
  )

  // h3
  markdown = markdown.replace(
    /^### (.*$)/gim,
    (_, header) => {
      const id = h3Counter++
      return `<a href='#h3-${id}'><h3 id="h3-${id}">${header}</h3></a>`
    }
  )

  // Bold
  markdown = markdown.replace(
    /(\*\*|__)(.*?)\1/g,
    "<b>$2</b>"
  )

  // Italics
  markdown = markdown.replace(/(\*|_)(.*?)\1/g, "<i>$2</i>")

  // Convert links
  markdown = markdown.replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2">$1</a>'
  )

  // Convert code blocks
  markdown = markdown.replace(
    /```([^`]+)```/g,
    "<pre><code>$1</code></pre>"
  )

  // Convert line breaks
  markdown = markdown.replace(/\n/g, "<br>")

  return markdown.trim()
}
