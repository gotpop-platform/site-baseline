import Icon from "@components/Icon"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Logo = () => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <a href="/" class={useName}>
      <style>{css}</style>
      <Icon iconName="child_care" />
      <h1>Singleton</h1>
    </a>
  )
}

export default Logo
