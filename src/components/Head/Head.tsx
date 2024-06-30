import { useCSSTheme } from "@hooks/useCSSTheme"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

const Head = ({
  title,
  theme = "",
}: {
  title: string
  theme?: string
}) => {
  const { cssTheme } = useCSSTheme(theme)
  const { css } = useCSS({
    meta: import.meta,
    global: true,
  })

  console.log("theme :", theme)
  return (
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <title>{title}</title>
      <link rel="icon" href="/assets/img/favicon.png" />
      <link
        rel="stylesheet"
        href="/assets/styles/index.css"
      />
      <style>{theme ? cssTheme : css}</style>
    </head>
  )
}

export default Head
