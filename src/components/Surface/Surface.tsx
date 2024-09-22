import { jsxFactory, useCSS } from "utils"

export function Surface({
  children,
  isMain = false,
  hasInner = false,
  ...rest
}: {
  children?: string | JSX.Element | (string | JSX.Element)[]
  isMain?: boolean
  hasInner?: boolean
  [key: string]: any
}): JSX.Element {
  const { css, useName } = useCSS({ meta: import.meta })

  const Wrapper = isMain ? "main" : "section"

  return (
    <Wrapper class={useName} {...rest}>
      <style>{css}</style>
      {hasInner ? (
        <div class="inner">{children}</div>
      ) : (
        children
      )}
    </Wrapper>
  )
}
