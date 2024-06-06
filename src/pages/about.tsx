import AppFull from "@layouts/app-full"
import Blog from "@components/Blog"
import Footer from "@components/Footer"
import Grid from "@components/Grid"
import Header from "@components/Header"
import h from "@utils/jsxFactory"

const aboutPage = async () => {
  return (
    <AppFull title="About">
      <Grid>
        {await Header()}
        {await Blog({})}
        {await Footer()}
      </Grid>
    </AppFull>
  )
}

export default aboutPage
