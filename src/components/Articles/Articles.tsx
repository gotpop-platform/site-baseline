import Article from "@components/Article"
import Gallery from "@components/Gallery"
import { arr } from "@data/data"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Articles = async () => {
  const { css } = useCSS({ meta: import.meta })

  const galleryItem = await Gallery({
    title: "Nice gallery",
    content: "Nice gallery",
  })

  const promises = arr.map((item, i) => {
    if (i === 3) {
      return galleryItem
    } else {
      return Article({
        title: item.title,
        content: item.content,
      })
    }
  })

  const articles = await Promise.all(promises).then(
    (article) => article.join("")
  )

  console.log("articles :", articles)
  return (
    <section class="articles">
      <style>{css}</style>
      {articles}
    </section>
  )
}

export default Articles
