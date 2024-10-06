import { jsxFactory, useCSS } from "utils"

import { BaseLinePopOver } from "components"

export const makePath = (subdomain: null | string) => {
  const { PROTOCOL, DOMAIN, LOCAL_PORT } = process.env
  const portStr = LOCAL_PORT ? `:${LOCAL_PORT}` : ""
  const subdomainStr = subdomain ? `${subdomain}.` : ""

  return `${PROTOCOL}://${subdomainStr}${DOMAIN}${portStr}/`
}

export function Footer({ ...rest }) {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <footer class={useName}>
      <style>{css}</style>
      <div class="inner">
        {/* <h3>Home</h3>
        <nav class="subdomains">
          <a href={makePath("")}>Home</a>
        </nav>
        <h3>Subdomains</h3>
        <Nav pages={[]} />
        <nav class="subdomains">
          <a href={makePath("demo")}>Demo</a>
          <a href={makePath("singleton")}>Singleton</a>
        </nav>
        <h3>Pop</h3> */}
        <nav class="subdomains">
          <button class="menu-link" popovertarget="basegrid">
            Grid
          </button>
          <BaseLinePopOver />
        </nav>
      </div>
    </footer>
  )
}
