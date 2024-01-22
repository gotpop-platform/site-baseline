import { arr, title } from "@data/data"

import Article from "@components/Article"
import Block from "@components/Block"
import Button from "@components/Button"
import h from "@utils/jsxFactory"
import App from "src/layouts/app"

export const h1 = <h1>{title}</h1>
const articles = arr.map((item) => <Article {...item} />)

const indexContent = () => (
  <App title="Home">
    <Block>
      <div>
        <h1>Home of biggest balls!!!</h1>
        {h1}
        {articles}
        <Button>Click me</Button>
      </div>
    </Block>
  </App>
)

export default indexContent
