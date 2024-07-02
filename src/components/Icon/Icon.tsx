import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"
import type { IconName } from "./Icon.types"
import { readFileSync } from "fs"
import { mkClass } from "@utils/mkClass"

type IconProps = {
  iconName?: IconName
  type?: IconTypes
}

enum IconTypes {
  filled = "filled",
  outline = "outline",
  round = "round",
  sharp = "sharp",
  twoTone = "two-tone",
}

const Icon = ({
  iconName = "home",
  type = IconTypes.filled,
}: IconProps) => {
  const { css } = useCSS({ meta: import.meta })
  const theRoot = process.cwd()
  const thePath = `${theRoot}/src/components/Icon/svg/${type}/${iconName}.svg`
  const theSVG = readFileSync(thePath, "utf-8")

  const cl = mkClass(import.meta.file)

  return (
    <span class={`${cl} ${cl}-${iconName}`}>
      <style>{css}</style>
      {theSVG}
    </span>
  )
}

export default Icon
