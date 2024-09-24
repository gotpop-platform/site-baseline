import { jsxFactory, style, useCSS } from "utils"

type GenerateElementProps = {
  tag: string
  styles: { [key: string]: string }
  children?: string
}

export function GenerateElement({
  tag,
  styles,
  children,
}: GenerateElementProps) {
  const { css } = useCSS({ meta: import.meta })
  const DynamicHTMLTag = tag

  return (
    <DynamicHTMLTag style={style(styles)}>
      <style>{css}</style>
      {children}
    </DynamicHTMLTag>
  )
}
