import { Article } from "@components/Article"
import { h } from "../utils/jsxFactory"

const title = "MiniMax About"
const h1 = <h1>{title}</h1>
const data = { title: "Test", content: "Testyyyyy2 333" }
const arr = [
  { title: "Test", content: "Testyyyyy2 333" },
  { title: "Test", content: "Testyyyyy2 333" },
]

const articles = arr.map((item) => Article(item))

const aboutContent = (
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

export default aboutContent
