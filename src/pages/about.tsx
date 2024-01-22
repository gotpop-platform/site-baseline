import { arr, title } from "@data/data"

import App from "src/layouts/app"
import Article from "@components/Article"
import Block from "@components/Block"
import Grid from "@components/Grid"
import h from "@utils/jsxFactory"

export const h1 = <h1>{title}</h1>
const articles = arr.map((item) => <Article {...item} />)

const aboutContent = () => (
  <App title="About">
    <Block>
      <Grid>
        {h1}
        {articles}
      </Grid>
    </Block>
  </App>
)

export default aboutContent
