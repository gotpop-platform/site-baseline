import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { useCSS } from "@gotpop-platform/package-utilities"

type TagProps = {
  tag: string
  styles: { [key: string]: string }
  children?: string
  class?: string
}

export function Tag({ tag, styles, class: className, children }: TagProps) {
  const { css } = useCSS({ meta: import.meta, styles })
  const DynamicHTMLTag = tag

  return className ? (
    <DynamicHTMLTag class={className}>
      <style>{css}</style>
      {children}
    </DynamicHTMLTag>
  ) : (
    <DynamicHTMLTag>
      <style>{css}</style>
      {children}
    </DynamicHTMLTag>
  )
}
