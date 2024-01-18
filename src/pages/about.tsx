import { arr, title } from "@data/data"

import { Article } from "@components/Article"
import { Head } from "@components/Head/Head"
import { Header } from "@components/Header"
import { h } from "@utils/jsxFactory"

export const h1 = <h1>{title}</h1>
const articles = arr.map((item) => Article(item))

const aboutContent = () => {
  return (
    <html lang="en">
      {Head({ title })}
      <body>
        <div>
          {Header()}
          {h1}
          {articles}
        </div>
      </body>
    </html>
  )
}

export default aboutContent
