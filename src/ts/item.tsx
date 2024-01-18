import { Article } from "@components/Article"
import { h } from "./jsxFactory"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

const title = "MiniMax"
const h1 = <h1>{title}</h1>
const data = { title: "Test", content: "Testyyyyy2 333" }
const arr = [
  { title: "Test", content: "Testyyyyy2 333" },
  { title: "Test", content: "Testyyyyy2 333" },
]

export const content = (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </head>
    <body>
      <div>
        {h1}
        <article>
          <style>
            {`
                    h3 {
                    color: red;
                    }
                `}
          </style>
          <h3>Test v</h3>
        </article>
        {Article(data)}
      </div>
    </body>
  </html>
)
