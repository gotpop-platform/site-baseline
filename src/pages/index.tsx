import { arr, title } from "@data/data"

import { Article } from "@components/Article"
import { Head } from "@components/Head/Head"
import { Header } from "@components/Header"
import Main from "@components/Main/Main"
import { h } from "@utils/jsxFactory"

export const h1 = <h1>{title}</h1>
const articles = arr.map((item) => Article(item))

const indexContent = () => {
  return (
    <html lang="en">
      {Head({ title })}
      <body>
        {Header()}
        <Main el="main">
          {h1}
          {articles}
        </Main>
      </body>
    </html>
  )
}

export default indexContent
