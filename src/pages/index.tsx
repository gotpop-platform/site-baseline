import { arr, title } from "@data/data"

import { Article } from "@components/Article"
import { h } from "../utils/jsxFactory"

export const h1 = <h1>{title}</h1>
const articles = arr.map((item) => Article(item))

const indexContent = (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </head>
    <body>
      <div>
        {h1}
        {articles}
      </div>
    </body>
  </html>
)

export default indexContent
