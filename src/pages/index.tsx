import Articles from "@components/Articles"
import Footer from "@components/Footer"
import GridFull from "@components/GridFull"
import Hero from "@components/Hero"
import AppFull from "@layouts/app-full"
import h from "@utils/jsxFactory"

const indexPage = async () => {
  const heroComponent = await Hero({
    title: "The single dependency framework",
    text: "SingleMum is a single dependency framework for building web applications. It is a simple, fast, and light framework.",
  })

  // const galleryItem = await Gallery({
  //   title: "Nice gallery",
  //   content: "Nice gallery",
  // })

  const articlesItem = await Articles()

  return (
    <AppFull title="Home">
      <GridFull>
        {heroComponent}
        {/* {galleryItem} */}
        {articlesItem}
        <Footer />
      </GridFull>
    </AppFull>
  )
}

export default indexPage
