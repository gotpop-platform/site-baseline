import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

function Surface({
  children,
}: {
  children?: string | JSX.Element | (string | JSX.Element)[]
}): JSX.Element {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <main class={useName}>
      <style>{css}</style>
      <div class="inner">{children}</div>
    </main>
  )
}

export default Surface
