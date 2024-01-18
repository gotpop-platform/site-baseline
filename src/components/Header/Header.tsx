import { h } from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type HeaderProps = { title: string; content: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

export const Header = ({ title, content }: HeaderProps) => {
  const { css } = useCSS(import.meta)
  const path = "src/components/Header/HeaderClient.js"

  return (
    <article class-name={useName}>
      <script src={path} type="module"></script>
      <style>{css}</style>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  )
}
