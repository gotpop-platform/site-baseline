import { dirname } from "path"
import { fileURLToPath } from "url"
import { h } from "../../ts/jsxFactory"
import { join } from "path"
import { readFileSync } from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

type LiamProps = { title: string; content: string }

export const Article = (props: LiamProps) => {
  const css = readFileSync(join(__dirname, "./Articles.css"), "utf-8")

  const article = (
    <article>
      <style>{css}</style>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </article>
  )

  return article
}
