import AppFull from "@layouts/app-full"
import Articles from "@components/Articles"
import Footer from "@components/Footer"
import GridFull from "@components/GridFull"
import Header from "@components/Header"
import Hero from "@components/Hero"
import Points from "@components/Points"
import { getPages } from "@utils/getPages"
import h from "@utils/jsxFactory"

const indexPage = async () => {
  const heroData = {
    title: "single dependency template",
    text: "Singleton is a single dependency framework for building web applications.",
  }

  const pages = await getPages()

  return (
    <AppFull title="Home">
      <GridFull>
        <Header pages={pages} />
        <Hero {...heroData} />
        <Points />
        {await Articles()}
        {await Footer()}
      </GridFull>
    </AppFull>
  )
}

export default indexPage
