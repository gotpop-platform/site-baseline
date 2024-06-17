import Nav from "@components/Nav"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

function Footer() {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <footer class={useName}>
      <style>{css}</style>
      <div class="inner">
        <h1>Footer</h1>
        <Nav pages={[]} />
        <nav class="subdomains">
          <a href="http://demo.localhost:9000/">Demo</a>
          <a href="http://api.localhost:9000/">API</a>
          <a href="http://localhost:9000/">Root</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
