import Articles from "@components/Articles"
import Footer from "@components/Footer"
import GridFull from "@components/GridFull"
import Hero from "@components/Hero"
import AppFull from "@layouts/app-full"
import h from "@utils/jsxFactory"

const indexPage = async () => {
  const heroComponent = await Hero({
    title: "Welcome to the home page",
    text: "This is the home page of the website",
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
