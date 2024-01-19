import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type HeaderProps = { title: string; content: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Header = () => {
  const { css } = useCSS({ meta: import.meta })
  // const path = "src/components/Header/HeaderClient.js"

  return (
    <header class={useName}>
      {/* <script src={path} type="module"></script> */}
      <style>{css}</style>
      <div>
        <h1>Logo</h1>
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  )
}

export default Header
