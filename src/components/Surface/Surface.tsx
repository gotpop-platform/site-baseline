import { jsxFactory, useCSS } from "utils"

export function Surface({
  children,
  isMain = false,
  hasInner = false,
}: {
  children?: string | JSX.Element | (string | JSX.Element)[]
  isMain?: boolean
  hasInner?: boolean
}): JSX.Element {
  const { css, useName } = useCSS({ meta: import.meta })

  const Wrapper = isMain ? "main" : "section"

  return (
    <Wrapper class={useName}>
      <style>{css}</style>
      {hasInner ? (
        <div class="inner">{children}</div>
      ) : (
        children
      )}
    </Wrapper>
  )
}
