import { mkClass, useCSS } from "@gotpop-platform/package-utilities"

import { jsxFactory } from "@gotpop-platform/package-jsx-factory"

interface CodeBlockProps {
  language?: string
  children?: string
}

export function CodeBlock({ language = "css", children }: CodeBlockProps): JSX.Element {
  const styles = { "--code-language": language }
  const { css } = useCSS({ meta: import.meta, styles })

  const escapeHtml = (unsafe: string) =>
    unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")

  const escapedCode = escapeHtml(children || "")

  return (
    <div data-language={language} class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <pre>
        <code>{escapedCode}</code>
      </pre>
    </div>
  )
}
