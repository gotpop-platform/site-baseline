import AppFull from "@layouts/app-full"
import Blog from "@components/Blog"
import Footer from "@components/Footer"
import Grid from "@components/Grid"
import Header from "@components/Header"
import h from "@utils/jsxFactory"
import { getPages } from "@utils/getPages"

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
