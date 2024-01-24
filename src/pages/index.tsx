import { arr, title } from "@data/data"

import Article from "@components/Article"
import Footer from "@components/Footer"
import GridFull from "@components/GridFull"
import Header from "@components/Header"
import AppFull from "@layouts/app-full"
import h from "@utils/jsxFactory"

export const h1 = <h1 class="liam">{title}</h1>
const articles = arr.map((item) => <Article {...item} />)

const indexContent = () => (
  <AppFull title="Home">
    <GridFull>
      <Header />
      <section>{articles}</section>
      <Footer />
    </GridFull>
  </AppFull>
)

export default indexContent
