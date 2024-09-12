import { NavItem } from "@components/NavItem"
import jsxFactory from "@utils/jsxFactory"
import path from "path"
import { useCSS } from "src/hooks/useCSS"

type Props = { pages: string[] }

export const Nav = ({
  pages,
}: Props): JSX.Element | null => {
  const { css, useName } = useCSS({ meta: import.meta })

  const navItems = pages
    ? pages.map((file) => {
        const href = `/${path.basename(file, ".tsx")}`
        const text =
          href.slice(1).charAt(0).toUpperCase() +
          href.slice(2)

        return { href, text }
      })
    : null

  const items = navItems
    ? navItems.map((item) => <NavItem {...item} />).join("")
    : null

  return (
    <nav class={useName}>
      <style>{css}</style>
      {items}
    </nav>
  )
}
