import Anchor from "@components/Anchor"
import { Surface } from "../Surface"
import jsxFactory from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export function HeroItem(): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  return (
    <Surface>
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
