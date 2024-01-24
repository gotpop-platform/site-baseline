import Article from "@components/Article"
import { arr } from "@data/data"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const articles = arr.map((item) => <Article {...item} />)

const Articles = () => {
  const { css } = useCSS({ meta: import.meta })

  return <section>{articles}</section>
}

export default Articles
