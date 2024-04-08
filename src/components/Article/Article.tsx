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

  return (
    <article class={`${useName}`}>
      <script src={path} type="module"></script>
      <style>{css}</style>
      <section class="content">
        <div class="intro">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <img
          class="image"
          src="https://picsum.photos/800/600"
          width="1800"
          height="300"
          alt="Hero image"
          loading="lazy"
        />
      </section>
    </article>
  )
}

export default Article
