import PopOverImage from "@components/PopOverImage"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type ArticleProps = { title: string; content: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Article = async ({
  title,
  content,
}: ArticleProps) => {
  const { css } = useCSS({ meta: import.meta })
  const path = "/assets/js/Article.client.js"
  const popOverImageItem = await PopOverImage({
    title: "Nice image",
    text: "Nice image",
  })

  return (
    <article class={`${useName} groce`}>
      <script src={path} type="module"></script>
      <style>{css}</style>
      <div class="intro">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      {popOverImageItem}
    </article>
  )
}

export default Article
