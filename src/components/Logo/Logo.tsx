import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Logo = () => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <a class={useName}>
      <style>{css}</style>
      <h1>Logo</h1>
    </a>
  )
}

export default Logo
