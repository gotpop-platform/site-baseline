import { jsxFactory, useCSS } from "utils"

import { Anchor } from "components"
import { Surface } from "../Surface"

export function HeroItem({
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
  const { css } = useCSS({ meta: import.meta })

  return (
    <Surface hasInner class="hero-item" {...rest}>
      <style>{css}</style>
      <h1>Typography & Animation!!!!!!!</h1>
      <p>
        Welcome to GotPop! This is a demo site for the
        GotPop theme.
        <Anchor href="/about">Learn more</Anchor>
      </p>
    </Surface>
  )
}
