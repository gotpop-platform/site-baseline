import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"
import { articlesData } from "../../data/articlesData"
import ArticleItem from "../ArticleItem"
import GalleryIntro from "../GalleryIntro"

function Surface({ slug }: { slug: string }): JSX.Element {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <main class={useName}>
      <style>{css}</style>
      <GalleryIntro slug={slug} />
      <div class="inner">
        {articlesData.map((article) => (
          <ArticleItem {...article} />
        ))}
      </div>
    </main>
  )
}

export default Surface
