import { AppTheme } from "@layouts/app"
import Blog from "@components/Blog"
import { Footer } from "@components/Footer"
import Grid from "@components/Grid"
import Header from "@components/Header"
import { getPages } from "@utils/getPages"
import jsxFactory from "@utils/jsxFactory"

const aboutPage = async () => {
  const pages = await getPages()

  return (
    <AppTheme title="About">
      <Grid>
        <Header pages={pages} />
        <Blog />
        <Footer />
      </Grid>
    </AppTheme>
  )
}

export default aboutPage
