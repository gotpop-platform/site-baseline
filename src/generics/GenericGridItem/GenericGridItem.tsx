import { jsxFactory, style, useCSS } from "utils"

type TagProps = {
  tag: string
  styles: { [key: string]: string }
  children?: string
}

export function Tag({ tag, styles, children }: TagProps) {
  const { css } = useCSS({ meta: import.meta })
  const DynamicHTMLTag = tag

  return (
    <DynamicHTMLTag style={style(styles)}>
      <style>{css}</style>
      {children}
    </DynamicHTMLTag>
  )
}
