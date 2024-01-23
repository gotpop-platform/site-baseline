import { arr, title } from "@data/data"

import App from "@layouts/app"
import Article from "@components/Article"
import Block from "@components/Block"
import Grid from "@components/Grid"
import h from "@utils/jsxFactory"

export const h1 = <h1 class="liam">{title}</h1>
const articles = arr.map((item) => <Article {...item} />)

const indexContent = () => (
  <App title="Home">
    <Block tag="section">
      <Grid>
        {h1}
        {articles}
      </Grid>
    </Block>
  </App>
)

export default indexContent
