import type { Toc } from "./markdown.types"

export const parseMarkdown = (
  markdown: string
): {
  html: string
} => {
  // Convert headers with unique IDs
  let h1Counter = 0
  let h2Counter = 0
  let h3Counter = 0
  const toc: Toc[] = []

  // H1
  markdown = markdown.replace(
    /^# (.*$)/gim,
    (_, header) => {
      const id = `h1-${h1Counter++}`
      toc.push({ level: 1, id, text: header })
      return `<a href='#${id}'><h1 id="${id}">${header}</h1></a>`
    }
  )

  // H2
  markdown = markdown.replace(
    /^## (.*$)/gim,
    (_, header) => {
      const id = `h2-${h2Counter++}`
      toc.push({ level: 2, id, text: header })
      return `<a href='#${id}'><h2 id="${id}">${header}</h2></a>`
    }
  )

  // H3
  markdown = markdown.replace(
    /^### (.*$)/gim,
    (_, header) => {
      const id = `h3-${h3Counter++}`
      toc.push({ level: 3, id, text: header })
      return `<a href='#${id}'><h3 id="${id}">${header}</h3></a>`
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

  return { html: markdown.trim(), toc }
}
