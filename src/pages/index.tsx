import AppFull from "@layouts/app-full"
import Article from "@components/Article"
import Articles from "@components/Articles"
import Footer from "@components/Footer"
import Gallery from "@components/Gallery"
import GridFull from "@components/GridFull"
import Header from "@components/Header"
import Hero from "@components/Hero"
import Points from "@components/Points"
import { arr } from "@data/data"
import { getPages } from "@utils/getPages"
import h from "@utils/jsxFactory"

export const buildArticles = async () => {
  const galleryItem = await Gallery({
    title: "Nice gallery",
    content: "Nice gallery",
  })

  const promises = arr.map(
    (item: { title: any; content: any }, i: number) => {
      if (i === 2) {
        return galleryItem
      } else {
        return Article({
          title: item.title,
          content: item.content,
        })
      }
    }
  )

  const articles = await Promise.all(promises).then(
    (article) => article.join("")
  )

  return articles
}

const indexPage = async () => {
  const heroData = {
    title: "single dependency template",
    text: "Singleton is a single dependency framework for building web applications.",
  }

  const pages = await getPages()
  const articles = await buildArticles()

  return (
    <AppFull title="Home">
      <GridFull>
        <Header pages={pages} />
        <Hero {...heroData} />
        <Points />
        <Articles articles={articles} />
        <Footer />
      </GridFull>
    </AppFull>
  )
}

export default indexPage
