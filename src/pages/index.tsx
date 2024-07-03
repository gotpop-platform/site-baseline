import Articles from "@components/Articles"
import { articles } from "@components/Articles/Articles.async"
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
        <Header pages={pages} />
        <Hero {...heroData} />
        <Points />
        <Articles {...{ articles }} />
        <Footer />
      </GridFull>
    </AppFull>
  )
}

export default indexPage
