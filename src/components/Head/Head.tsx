import { jsxFactory } from "utils"

const Head = ({ title }: { title: string }) => {
  const baseStylePath = "/assets/styles/index.css"

  return (
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript"
      />
      <meta name="author" content="GotPop"></meta>
      <title>{title}</title>
      <link rel="icon" href="/assets/img/favicon.png" />
      <link rel="stylesheet" href={baseStylePath} />
      {process.env.NODE_ENV === "production" ? (
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
      ) : null}
    </head>
  )
}

export default Head
