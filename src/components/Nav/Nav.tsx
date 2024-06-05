import { Glob } from "bun"
import NavItem from "@components/NavItem"
import h from "@utils/jsxFactory"
import path from "path"
import { useCSS } from "src/hooks/useCSS"

const Nav = async () => {
  const glob = new Glob("./src/pages/*.tsx")
  const { css, useName } = useCSS({ meta: import.meta })
  let arr = []

  for await (const filePath of glob.scan(".")) {
    arr.push(filePath)
  }

  const navItems = arr.map((file) => {
    const href = `/${path.basename(file, ".tsx")}`
    const text =
      href.slice(1).charAt(0).toUpperCase() + href.slice(2)

    return { href, text }
  })

  const items = navItems
    .map((item) => <NavItem {...item} />)
    .join("")

  return (
    <nav class={useName}>
      <style>{css}</style>
      {items}
    </nav>
  )
}

export default Nav
