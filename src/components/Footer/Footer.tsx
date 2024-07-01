import Nav from "@components/Nav"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export const makePath = (subdomain: null | string) => {
  const { PROTOCOL, DOMAIN, LOCAL_PORT } = process.env
  const portStr = LOCAL_PORT ? `:${LOCAL_PORT}` : ""
  const subdomainStr = subdomain ? `${subdomain}.` : ""

  return `${PROTOCOL}://${subdomainStr}${DOMAIN}${portStr}/`
}

function Footer() {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <footer class={useName}>
      <style>{css}</style>
      <div class="inner">
        <h3>Subdomains</h3>
        <Nav pages={[]} />
        <nav class="subdomains">
          <a href={makePath("demo")}>Demo</a>
          <a href={makePath("singleton")}>Singleton</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
