import AppFull from "@layouts/app-full"
import Articles from "@components/Articles"
import Footer from "@components/Footer"
import GridFull from "@components/GridFull"
import Hero from "@components/Hero"
import h from "@utils/jsxFactory"

const indexPage = async () => {
  const heroComponent = await Hero({
    title: "The single dependency framework",
    text: "SingleMum is a single dependency framework for building web applications. It is a simple, fast, and light framework.",
  })

  const articlesItem = await Articles()

  return (
    <AppFull title="Home">
      <GridFull>
        {heroComponent}
        {articlesItem}
        <Footer />
      </GridFull>
    </AppFull>
  )
}

export default indexPage
