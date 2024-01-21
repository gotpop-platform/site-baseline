import { arr, title } from "@data/data"

import Article from "@components/Article"
import Button from "@components/Button"
import Main from "@components/Main"
import h from "@utils/jsxFactory"
import App from "src/layouts/app"

export const h1 = <h1>{title}</h1>
const articles = arr.map((item) => <Article {...item} />)

const indexContent = () => (
  <App title="Home">
    <Main>
      <h1>Home of biggest balls</h1>
      {h1}
      {articles}
      <Button>Click me</Button>
    </Main>
  </App>
)

export default indexContent
