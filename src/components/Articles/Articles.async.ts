import Article from "@components/Article/Article"
import { Gallery } from "@components/Gallery"
import { arr } from "@data/data"

const buildArticles = async () => {
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

export const articles = await buildArticles()
