import Footer from "@components/Footer"
import GridFull from "@components/GridFull"
import Header from "@components/Header"
import Hero from "@components/Hero"
import Points from "@components/Points"
import { heroData } from "@data/data.hero"
import AppFull from "@layouts/app-full"
import { getPages } from "@utils/getPages"
import h from "@utils/jsxFactory"

const indexPage = async () => {
  const pages = await getPages()

  return (
    <AppFull title="Home">
      <GridFull>
        <h1>Demo</h1>
        <Header pages={pages} />
        <Hero {...heroData} />
        <Points />
        <Footer />
      </GridFull>
    </AppFull>
  )
}

export default indexPage
