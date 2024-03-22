import Article from "@components/Article"
import { arr } from "@data/data"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Articles = async () => {
  const { css } = useCSS({ meta: import.meta })
  // const articleItem = await Article({
  //   title: "Nice article",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // })

  const articles = await Promise.all(
    arr.map(async (item) => {
      const article = await Article({
        title: item.title,
        content: item.content,
      })
      return article
    })
  ).then((articles) => articles.join(""))

  return (
    <section class="articles">
      <style>{css}</style>
      {articles}
    </section>
  )
}

export default Articles
