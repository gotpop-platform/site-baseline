import AppFull from "@layouts/app-full"
import Articles from "@components/Articles"
import Footer from "@components/Footer"
import GridFull from "@components/GridFull"
import Hero from "@components/Hero"
import h from "@utils/jsxFactory"

const indexContent = () => (
  <AppFull title="Home">
    <GridFull>
      <Hero title="Home" text="This is the home page" />
      <Articles />
      <Footer />
    </GridFull>
  </AppFull>
)

export default indexContent
