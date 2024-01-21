import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

const Head = ({ title }: { title: string }) => {
  const { css } = useCSS({ meta: import.meta, global: true })

  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <style>{css}</style>
      <link rel="icon" href="/assets/img/favicon.png" />
    </head>
  )
}

export default Head
