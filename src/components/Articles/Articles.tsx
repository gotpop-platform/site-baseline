import { jsxFactory } from "utils"
import { useCSS } from "src/hooks/useCSS"

const Articles = ({ articles }: { articles: string }) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <section class="articles">
      <style>{css}</style>
      {articles}
    </section>
  )
}

export default Articles
