import AppFull from "@layouts/app-full"
import Articles from "@components/Articles"
import Footer from "@components/Footer"
import GridFull from "@components/GridFull"
import Header from "@components/Header"
import Hero from "@components/Hero"
import Points from "@components/Points"
import h from "@utils/jsxFactory"

const indexPage = async () => {
  const headerItem = await Header()
  const pointsItem = await Points({})
  const heroComponent = await Hero({
    title: "single dependency template",
    text: "SingleMum is a single dependency framework for building web applications. It is a simple, fast, and light framework. SingleMum is a single dependency framework for building web applications. It is a simple, fast, and light framework.",
  })

  const articlesItem = await Articles()

  return (
    <AppFull title="Home">
      <GridFull>
        {headerItem}
        {heroComponent}
        {pointsItem}
        {articlesItem}
        <Footer />
      </GridFull>
    </AppFull>
  )
}

export default indexPage
