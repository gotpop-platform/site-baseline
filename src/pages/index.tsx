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
  const footerItem = await Footer()
  const heroComponent = await Hero({
    title: "single dependency template",
    text: "Singleton is a single dependency framework for building web applications.",
  })

  const articlesItem = await Articles()

  return (
    <AppFull title="Home">
      <GridFull>
        {headerItem}
        {heroComponent}
        {pointsItem}
        {articlesItem}
        {footerItem}
      </GridFull>
    </AppFull>
  )
}

export default indexPage
