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
        href={baseStylePath}
      />
      <script type="speculationrules">
        {`{
            "prerender": [
              {
                "urls": [
                  "/", 
                  "articles/article-1", 
                  "articles/article-2", 
                  "articles/article-3", 
                  "articles/article-4", 
                  "articles/article-5", 
                  "articles/article-6"
                ]
              }
            ]
        }`}
      </script>
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
