import Article from "@components/Article"
import Block from "@components/Block"
import Grid from "@components/Grid"
import { arr } from "@data/data"
import App from "@layouts/app"
import h from "@utils/jsxFactory"
import { h1 } from "."

const articles = arr.map((item) => <Article {...item} />)

const aboutContent = () => (
  <App title="About">
    <Block tag="section">
      <Grid>
        {h1}
        {articles}
      </Grid>
    </Block>
  </App>
)

export default aboutContent
