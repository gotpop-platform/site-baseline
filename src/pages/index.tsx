import { arr, title } from "@data/data"

import App from "src/layouts/app"
import Article from "@components/Article"
import Main from "@components/Main"
import h from "@utils/jsxFactory"

export const h1 = <h1>{title}</h1>
const articles = arr.map((item) => Article(item))

const indexContent = () => {
  return (
    <App title="Home">
      <Main>
        {h1}
        {articles}
      </Main>
    </App>
  )
}

export default indexContent
