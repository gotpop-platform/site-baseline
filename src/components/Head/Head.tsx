import h from "@utils/jsxFactory"

const Head = ({
  title,
  theme = "",
}: {
  title: string
  theme?: string
}) => {
  const baseStylePath = "/assets/styles/index.css"
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
        href={theme ? theme : baseStylePath}
      />
      <style>
        {`
@view-transition {
  navigation: auto;
}

        `}
      </style>
    </head>
  )
}

export default Head
