import Button from "@components/Button"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type ArticleProps = { title: string; content: string }

const Article = async ({
  title,
  content,
}: ArticleProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <article class="article">
      <style>{css}</style>
      <section class="content">
        <div class="intro">
          <h3>{title}</h3>
          <p>{content}</p>
          <Button href="/about">About</Button>
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
