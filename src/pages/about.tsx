import App from "src/layouts/app"
import Article from "@components/Article"
import Block from "@components/Block"
import { arr } from "@data/data"
import h from "@utils/jsxFactory"

const articles = arr.map((item) => <Article {...item} />)

const aboutContent = () => (
  <App title="About">
    <Block tag="section">{articles}</Block>
  </App>
)

export default aboutContent
