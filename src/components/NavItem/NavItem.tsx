import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type NavItemProps = { href: string; text: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const NavItem = ({ href, text }: NavItemProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <a class={useName} href={href}>
      <style>{css}</style>
      <span>{text}</span>
    </a>
  )
}

export default NavItem
