import * as path from "path"

import NavItem from "@components/NavItem"
import h from "@utils/jsxFactory"
import { glob } from "glob"
import { useCSS } from "src/hooks/useCSS"

type LogoProps = { children?: string; id?: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Logo = ({ children }: LogoProps) => {
  const { css } = useCSS({ meta: import.meta })

  const files = glob.sync("./src/pages/*.tsx")

  const navItems = files.map((file) => {
    const href = `/${path.basename(file, ".tsx")}`
    const text = href.slice(1).charAt(0).toUpperCase() + href.slice(2)
    return { href, text }
  })

  return (
    <div class={useName}>
      <style>{css}</style>
      {navItems.map((item) => (
        <NavItem {...item} />
      ))}
    </div>
  )
}

export default Logo
