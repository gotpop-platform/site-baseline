import Block from "@components/Block"
import Grid from "@components/Grid"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type HeaderProps = { title: string; content: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Header = () => {
  const { css } = useCSS({ meta: import.meta })
  const path = "assets/js/Header.client.js"

  return (
    <Block>
      <Grid>
        <header class={useName}>
          <script src={path} type="module"></script>
          <style>{css}</style>
          <div>
            <h1>Logo</h1>
          </div>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
      </Grid>
    </Block>
  )
}

export default Header
