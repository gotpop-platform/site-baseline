import AppFull from "@layouts/app-full"
import Blog from "@components/Blog"
import Footer from "@components/Footer"
import Grid from "@components/Grid"
import Header from "@components/Header"
import h from "@utils/jsxFactory"

const aboutPage = async () => {
  const headerItem = await Header()
  const blogItem = await Blog({})
  const footerItem = await Footer()

  return (
    <AppFull title="About">
      <Grid>
        {headerItem}
        {blogItem}
        {footerItem}
      </Grid>
    </AppFull>
  )
}

export default aboutPage
