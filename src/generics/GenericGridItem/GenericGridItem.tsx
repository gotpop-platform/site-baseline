import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { useCSS } from "@gotpop-platform/package-utilities"

type TagProps = {
  tag: string
  styles: { [key: string]: string }
  children?: string
}

export function Tag({ tag, styles, children }: TagProps) {
  const { css } = useCSS({ meta: import.meta, styles })
  const DynamicHTMLTag = tag

  return (
    <DynamicHTMLTag>
      <style>{css}</style>
      {children}
    </DynamicHTMLTag>
  )
}
