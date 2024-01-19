import { arr, title } from "@data/data"

import Article from "@components/Article"
import Head from "@components/Head"
import Header from "@components/Header"
import Main from "@components/Main/Main"
import h from "@utils/jsxFactory"

export const h1 = <h1>{title}</h1>
const articles = arr.map((item) => Article(item))

const indexContent = () => {
  return (
    <html lang="en">
      <Head title="Home" />
      <body>
        <div className="site">
          <Header />
          <Main>
            {h1}
            {articles}
          </Main>
        </div>
      </body>
    </html>
  )
}

export default indexContent
