import { jsxFactory, useCSS } from "utils"

interface MainProps {
  children?: any
}

export const Main = ({ children }: MainProps) => {
  const { css, useName } = useCSS({ meta: import.meta })
  return (
    <main class="main">
      <style>{css}</style>
      {children}
    </main>
  )
}
