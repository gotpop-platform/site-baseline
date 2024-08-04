import { Surface } from "../Surface"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export function HeroItem(): JSX.Element {
  const { css } = useCSS({ meta: import.meta })

  return (
    <Surface>
      <style>{css}</style>
      <h1>Typography & Animation</h1>
      <p>
        Welcome to GotPop! This is a demo site for the
        GotPop theme.
      </p>
    </Surface>
  )
}
