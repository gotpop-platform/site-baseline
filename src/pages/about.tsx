import Blog from "@components/Blog"
import Footer from "@components/Footer"
import Grid from "@components/Grid"
import Header from "@components/Header"
import AppFull from "@layouts/app"
import { getPages } from "@utils/getPages"
import jsxFactory from "@utils/jsxFactory"

const aboutPage = async () => {
  const pages = await getPages()

  return (
    <AppFull title="About">
      <Grid>
        <Header pages={pages} />
        <Blog />
        <Footer />
      </Grid>
    </AppFull>
  )
}

export default aboutPage
