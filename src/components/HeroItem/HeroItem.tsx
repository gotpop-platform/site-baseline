import { jsxFactory, useCSS } from "utils"

import { Anchor } from "@components/Anchor"
import { Surface } from "../Surface"

export function HeroItem(): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  return (
    <Surface hasInner>
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
