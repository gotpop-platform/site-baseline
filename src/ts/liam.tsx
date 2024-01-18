import { h } from "../utils/jsxFactory"

type LiamProps = { title: string; content: string }

const Liam = (props: LiamProps) => {
  return (
    <article>
      <h1>Fuck</h1>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </article>
  )
}

export default Liam
