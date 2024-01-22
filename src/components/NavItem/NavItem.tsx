import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type NavProps = { children?: string; id?: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Nav = ({ children }: NavProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <a class={useName}>
      <style>{css}</style>
      {children}
    </a>
  )
}

export default Nav
