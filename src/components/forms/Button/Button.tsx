import { jsxFactory } from "utils"
import { useCSS } from "@gotpop-platform/utils"

type ButtonProps = {
  href: string
  children?: string | JSX.Element | JSX.Element[]
}

const Button = ({ href, children }: ButtonProps) => {
  const { css, useName } = useCSS({ meta: import.meta })

  return (
    <a class={useName + " link-button"} href={href}>
      <style>{css}</style>
      {children}
    </a>
  )
}

export default Button
