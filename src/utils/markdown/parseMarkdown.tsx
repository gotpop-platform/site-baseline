import { CodeBlock } from "src/components/CodeBlock"
import type { Toc } from "./markdown.types"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

export const parseMarkdown = (
  markdown: string
): {
  html: string
  toc: Toc[]
} => {
  // Convert headers with unique IDs
  let h1Counter = 0
  let h2Counter = 0
  let h3Counter = 0
  const toc: Toc[] = []

  // H1
  markdown = markdown.replace(/^# (.*$)/gim, (_, header) => {
    const id = `h1-${h1Counter++}`
    toc.push({ level: 1, id, text: header })
    return `<a href='#${id}'><h1 id="${id}">${header}</h1></a>`
  })

  // H2
  markdown = markdown.replace(/^## (.*$)/gim, (_, header) => {
    const id = `h2-${h2Counter++}`
    toc.push({ level: 2, id, text: header })
    return `<a href='#${id}'><h2 id="${id}">${header}</h2></a>`
  })

  // H3
  markdown = markdown.replace(/^### (.*$)/gim, (_, header) => {
    const id = `h3-${h3Counter++}`
    toc.push({ level: 3, id, text: header })
    return `<a href='#${id}'><h3 id="${id}">${header}</h3></a>`
  })

  // Bold
  markdown = markdown.replace(/(\*\*|__)(.*?)\1/g, "<b>$2</b>")

  // Italics
  markdown = markdown.replace(/(\*|_)(.*?)\1/g, "<i>$2</i>")

  // Convert links
  markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')

  // Extract code blocks
  const codeBlocks: any[] = []
  markdown = markdown.replace(/```([^`]+)```/g, (match, code) => {
    codeBlocks.push(code)
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`
  })

  // Convert plain text to paragraphs
  markdown = markdown.replace(/(^|\n)([^<>\n]+)(?=\n|$)/g, (_, start, text) => {
    const trimmedText = text.trim()
    if (trimmedText) {
      return `${start}<p>${trimmedText}</p>`
    }
    return start
  })

  // Reinsert code blocks
  const componentToVariable = (index: number) => {
    return <CodeBlock>{codeBlocks[index]}</CodeBlock>
  }

  markdown = markdown.replace(/__CODE_BLOCK_(\d+)__/g, (_, index) => {
    return componentToVariable(index).toString()
  })

  return { html: markdown.trim(), toc }
}
